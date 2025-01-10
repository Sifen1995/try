import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('register')
    async register(@Body() body: { email: string; password: string ;name:string}) {
        return this.userService.register(body.email, body.password,body.name);
    }

    @Post('login')
    async login(@Body() body: { email: string; password: string }) {
        return this.userService.login(body.email, body.password);
    }
}

