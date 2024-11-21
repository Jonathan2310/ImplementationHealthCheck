import { Controller, Get, Post, Body, Req, Inject, Logger } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthRequestController } from 'src/middlewares/auth/types/auth-request';
import { NATS_SERVICE } from 'src/config';
import { catchError } from 'rxjs';



@Controller('/auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post('/register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.client.send('auth.register.user', registerUserDto)
      .pipe(
        catchError(error => {
          throw new RpcException(error);
        })
      );
  }

  @Post('/login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.client.send('auth.login.user', loginUserDto)
      .pipe(
        catchError(error => {
          throw new RpcException(error);
        })
      );
  }

  @Get('/verify')
  verify(@Req() req: AuthRequestController){
    console.log({user: req.user, token: req.authorizationToken})
  }
}
