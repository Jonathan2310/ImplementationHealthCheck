import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthService {
    create(createAuthDto: CreateAuthDto): {
        message: string;
        user: CreateAuthDto;
    };
    findAll(): {
        id: number;
        name: string;
        email: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
    };
    verify(id: number): string;
}
