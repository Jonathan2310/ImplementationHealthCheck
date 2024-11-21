import { Request } from "express";
export type AuthRequestMiddleware = Request & {
    user?: {
        id: string;
    };
};
export type AuthRequestController = Request & {
    user: {
        id: string;
    };
    authorizationToken: string;
};
