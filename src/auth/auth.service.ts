import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService) {}

    async signup(email: string, password: string) {
        
        // Check if email is duplicate        
        if(await this.isEmailDuplicated(email)) {
            throw new BadRequestException("Email is already in use!")
        }

        // Hash and salting the password
        const passwordHash = await this.HashingPassword(password);

        // Create and saving user
        return this.usersService.create(email, passwordHash);

    }

    signin() {

    }

    private async isEmailDuplicated(email: string) {
        const users = await this.usersService.find(email);
        if(users.length) {
            return true;
        }
        return false;
    }

    private async HashingPassword(password: string) {
        const salt = randomBytes(8).toString('hex');
        const hash = (await scrypt(password, salt, 32)) as Buffer;
        return salt + '.' + hash.toString('hex');
    }

}
