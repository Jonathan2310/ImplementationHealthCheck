import { ClientProxy } from '@nestjs/microservices';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthRequestController } from 'src/middlewares/auth/types/auth-request';
export declare class AuthController {
    private readonly client;
    private readonly logger;
    constructor(client: ClientProxy);
    register(registerUserDto: RegisterUserDto): import("rxjs").Observable<any>;
    login(loginUserDto: LoginUserDto): import("rxjs").Observable<any>;
    verify(req: AuthRequestController): void;
}
