import { NestMiddleware } from '@nestjs/common';
import { Response } from 'express';
import { AuthRequestMiddleware } from './types/auth-request';
export declare class AuthMiddleware implements NestMiddleware {
    use(req: AuthRequestMiddleware, res: Response, next: () => void): void;
}
