import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { RegisterUserDto } from './dto/register-user.dto';
export declare class AuthController {
    private readonly authService;
    private readonly logger;
    constructor(authService: AuthService);
    register(registerUserDto: RegisterUserDto): {
        message: string;
        user: CreateAuthDto;
    };
    login(loginUserDto: any): {
        id: number;
        name: string;
        email: string;
    };
    verify(verifyUserDto: any): string;
}
