import { ClientProxy } from '@nestjs/microservices';
export declare class HealthController {
    private readonly client;
    private readonly logger;
    constructor(client: ClientProxy);
    check(): import("rxjs").Observable<any>;
}
