import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CreateUserDto } from "../dto/createUserDto.dto";
import { UserEmailQueryDto } from "../dto/userEmailQueryDto.dto";
import { User } from "../schemas/user.schema";
import { UsersService } from "../services/users.service";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        const newUser = this.usersService.create(createUserDto);
        return newUser;
    }

    @Get()
    async getOne(@Query() userEmail: UserEmailQueryDto): Promise<User> {
        const user = this.usersService.findOne(userEmail.username);
        return user;
    }
}