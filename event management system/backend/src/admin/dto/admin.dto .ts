import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateAdminDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    role: string; // Ensure to set 'admin' when creating an admin
}

export class LoginAdminDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
