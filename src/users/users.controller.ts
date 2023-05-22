import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    createUser(@Body() body: CreateUserDto) {
        return this.usersService.create(body.email, body.password)
    }

    @Get('/:id')
    findUser(@Param('id') id: number) {
        return this.usersService.findOne(id);
    }

    @Get()
    findAllUsers() {}

    @Delete()
    removeUser() {}

    @Patch('/:id')
    updateUser() {}

}
