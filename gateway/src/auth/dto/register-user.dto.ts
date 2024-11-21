// auth/dto/register-user.dto.ts
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class RegisterUserDto {
    @IsString()
    name: string

    @IsString()
    @IsEmail()
    email:string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    password:string;
}