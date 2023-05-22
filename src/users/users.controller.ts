import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    createUser(@Body() body: CreateUserDto) {
        return this.usersService.create(body.email, body.password)
    }

    @Get()
    findUser() {}

    @Get()
    findAllUsers() {}

    @Delete()
    removeUser() {}

    @Patch('/:id')
    updateUser() {}

}
