import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Post()
    createUser() {}

    @Get()
    findUser() {}

    @Get()
    findAllUsers() {}

    @Delete()
    removeUser() {}

    @Patch('/:id')
    updateUser() {}

}
