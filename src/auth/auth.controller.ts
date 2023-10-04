import { Body, Controller, Post } from '@nestjs/common';
import { User } from './models/user.model';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public login(@Body() body: Pick<User, 'Email' | 'Password'>) {
    return this.authService.login(body.Email, body.Password);
  }

  @Post('register')
  public register(@Body() body: Omit<User, 'id'>) {
    return this.authService.register(body);
  }
}