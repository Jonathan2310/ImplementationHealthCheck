import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller()
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth.register.user')
  register(@Payload() registerUserDto: RegisterUserDto) {
    this.logger.log('Received message: auth.register.user');
    return this.authService.create(registerUserDto);
  }

  @MessagePattern('auth.login.user')
  login(@Payload() loginUserDto: any) {
    this.logger.log('Received message: auth.login.user');
    return this.authService.findOne(loginUserDto.id);
  }

  @MessagePattern('auth.verify.user')
  verify(@Payload() verifyUserDto: any) {
    this.logger.log('Received message: auth.verify.user');
    return this.authService.verify(verifyUserDto.id);
  }
}