import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/createUserDto.dto';
import { User } from "../schemas/user.schema";
import { genSaltSync, hashSync } from "bcryptjs";

@Injectable()
export class UsersService {
  private readonly users: User[];
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User>{
    
    createUserDto.password = this.hashUserPassword(createUserDto.password);

    const newUser = this.userModel.create(createUserDto);
    return newUser;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({username: username}).exec();
  }

  private hashUserPassword(password: string){
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);

    return hash;
  }
}