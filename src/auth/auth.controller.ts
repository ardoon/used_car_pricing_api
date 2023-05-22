import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos/auth.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from 'src/users/dtos/user.dto';

@Controller('auth')
@Serialize(UserDto)
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/signup')
    signup(@Body() body: AuthDto) {
        return this.authService.signup(body.email, body.password)
    }

    @Post('/signin')
    signin(@Body() body: AuthDto) {
        return this.authService.signin(body.email, body.password)
    }

}
