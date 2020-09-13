import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { UsersService } from '../../users/services/users.service';
import { compareSync } from "bcryptjs";
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async validateUser(user: string, pass: string): Promise<User | null> {
    const getUser = await this.usersService.findOne(user);
    const isPasswordValid = compareSync(pass, getUser.password);
    if (getUser && isPasswordValid) {
      return getUser;
    }
    return null;
  }

  async login(user: User): Promise<{ access_token: string }> {  
    const payload = { username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}