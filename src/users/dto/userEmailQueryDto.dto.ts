import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserEmailQueryDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  username: string;
}