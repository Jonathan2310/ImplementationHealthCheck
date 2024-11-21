// src/health/health.service.ts
import { Injectable } from '@nestjs/common';
import { HealthCheckError, HealthCheckService, HealthIndicator, HealthIndicatorResult } from '@nestjs/terminus';

@Injectable()
export class HealthService extends HealthIndicator {
  constructor(private health: HealthCheckService) {
    super();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    const databaseIsHealthy = false; 
    const cacheIsHealthy = true; 
    const externalServiceIsHealthy = true;

    const isHealthy = databaseIsHealthy && cacheIsHealthy && externalServiceIsHealthy;
    const result = this.getStatus(key, isHealthy, {
      database: databaseIsHealthy ? 'up' : 'down',
      cache: cacheIsHealthy ? 'up' : 'down',
      externalService: externalServiceIsHealthy ? 'up' : 'down',
    });

    if (isHealthy) {
      return result;
    }else{
      return result;
    }
  }
}