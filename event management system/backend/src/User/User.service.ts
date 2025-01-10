import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from './schemas/User.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private jwtService: JwtService,
    ) {}

    async register(email: string, password: string,name:string): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new this.userModel({ email, password: hashedPassword,name });
        return newUser.save();
    }

    async login(email: string, password: string): Promise<{ token: string }> {
        const user = await this.userModel.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new UnauthorizedException('Invalid credentials');
        }
        const payload = { email: user.email, sub: user._id, role: user.role };
        const token = this.jwtService.sign(payload);
        return { token };
    }

    async validateUser(payload: { email: string; sub: string; role: string }): Promise<User> {
        return this.userModel.findOne({ _id: payload.sub });
    }

    async findUserByEmail(email: string): Promise<User> { return this.userModel.findOne({ email }) as Promise<User>; }
}

