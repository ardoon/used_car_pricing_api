import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {

    @Post()
    createUser(@Body() body: CreateUserDto) {
        console.log(body);
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
