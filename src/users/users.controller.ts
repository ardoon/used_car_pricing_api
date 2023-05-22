import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';

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
    findAllUsers(@Query('email') email: string) {
        return this.usersService.find(email);
    }

    @Delete()
    removeUser() {}

    @Patch('/:id')
    updateUser(@Param('id') id: number, @Body() body: UpdateUserDto) {
        return this.usersService.update(id, body)
    }

}
