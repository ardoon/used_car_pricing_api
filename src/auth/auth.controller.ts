import { Body, Controller, Get, Post, Session, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from 'src/users/dtos/user.dto';
import { CurrentUser } from './decorators/current-user.decorator';
import { User } from 'src/users/user.entity';
import { AuthGuard } from 'src/guards/auth.guard';

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

    @UseGuards(AuthGuard)
    @Get('/whoami')
    whoAmI(@CurrentUser() user: User) {
        return user;
    }

    @Post('/signout')
    signout(@Session() session: any) {
        session.userId = null;
    }

}
