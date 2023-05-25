import { Module } from '@nestjs/common';
import { SignupController } from './controllers/signup.controller';
import { SigninController } from './controllers/signin.controller';
import { SignupService } from './services/signup.service';
import { TokensService } from './services/token.service';
import { JwtModule } from '@nestjs/jwt';
import { SigninService } from './services/signin.service';
import { UserModule } from 'src/user/user.module';
import { UserService } from './services/user.service';
import { LocalStrategy } from './strategies/local.startegy';


@Module({
  imports: [
    // TODO GET FROM CONFIG
    JwtModule.register({
      global: true,
      secret: 'SUPER_SECURE_JWT',
    }),
    UserModule,
  ],
  controllers: [
    SignupController, 
    SigninController
  ],
  providers: [
    SignupService, 
    SigninService, 
    TokensService, 
    UserService, 
    LocalStrategy
  ],
})
export class AuthModule {}
