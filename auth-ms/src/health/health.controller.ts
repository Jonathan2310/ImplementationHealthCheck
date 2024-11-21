// src/health/health.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { HealthCheck, HealthCheckService, HealthCheckResult } from '@nestjs/terminus';
import { HealthService } from './health.service';

@Controller()
export class HealthController {
  constructor(private health: HealthCheckService, private healthService: HealthService) {}

  @MessagePattern('auth.health.check')
  @HealthCheck()
  check(): Promise<HealthCheckResult> {
    return this.health.check([
      async () => this.healthService.isHealthy('auth-ms'),
    ]);
  }
}