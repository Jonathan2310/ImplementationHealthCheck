// src/app.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { NatsModule } from './transports/nats.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [AuthModule, NatsModule, HealthModule],
})
export class AppModule {}