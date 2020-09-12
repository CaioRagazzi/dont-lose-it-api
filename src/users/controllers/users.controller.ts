import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "../dto/createUserDto.dto";
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
}