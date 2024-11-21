// app.module.ts
import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthMiddleware } from './middlewares/auth/auth.middleware';
import { NatsModule } from './transports/nats.module';
import { HealthModule } from './health/health.module';
@Module({
  imports: [AuthModule, NatsModule, HealthModule],
  controllers: [AuthController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthMiddleware)
    .forRoutes({path: 'auth/verify', method: RequestMethod.GET})
  }
}