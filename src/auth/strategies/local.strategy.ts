import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { User } from 'src/users/schemas/user.schema';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(user: string, pass: string): Promise<User | UnauthorizedException> {
    const getUser = await this.authService.validateUser(user, pass);
    if (!user) {
      throw new UnauthorizedException();
    }
    return getUser;
  }
}