import { HealthCheckService, HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';
export declare class HealthService extends HealthIndicator {
    private health;
    constructor(health: HealthCheckService);
    isHealthy(key: string): Promise<HealthIndicatorResult>;
}
