import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/createUserDto.dto';
import { User } from "../schemas/user.schema";

@Injectable()
export class UsersService {
  private readonly users: User[];
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User>{
    const newUser = this.userModel.create(createUserDto);
    return newUser;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({username: username}).exec();
  }
}