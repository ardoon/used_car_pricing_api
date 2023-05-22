import { Body, Controller, Get, Post, Session } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from 'src/users/dtos/user.dto';

@Controller('auth')
@Serialize(UserDto)
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/signup')
    async signup(@Body() body: AuthDto, @Session() session: any) {
        const user = await this.authService.signup(body.email, body.password)
        session.userId = user.id;
        return user;
    }

    @Post('/signin')
    async signin(@Body() body: AuthDto, @Session() session: any) {
        const user = await this.authService.signin(body.email, body.password)
        session.userId = user.id;
        return user;
    }

    @Get('/whoami')
    whoAmI(@Session() session: any) {
        return this.authService.whoAmI(session.userId);
    }

    @Post('/signout')
    signout(@Session() session: any) {
        session.userId = null;
    }

}
