// src/health/health.controller.ts
import { Controller, Get, Inject, Logger } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs/operators';
import { NATS_SERVICE } from 'src/config';

@Controller('health')
export class HealthController {
  private readonly logger = new Logger(HealthController.name);

  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Get()
  check() {
    this.logger.log('Sending health check request to auth-ms');
    return this.client.send('auth.health.check', {})
      .pipe(
        catchError(error => {
          this.logger.error('Error sending health check request to NATS', error);
          throw new RpcException(error);
        })
      );
  }
}