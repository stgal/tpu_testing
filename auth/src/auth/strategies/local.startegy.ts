import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { SigninService } from '../services/signin.service';
import { Strategy } from 'passport-local';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { IUser } from '../interfaces';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private signinService: SigninService) {
    super({
      // TODO GET FROM CONFIG
      usernameField: 'id',
      secretOrKey: 'SUPER_SECURE_JWT'
    });
  }

  // TODO ADD TYPE
  async validate(userName, password): Promise<any> {
    const user = await this.signinService.validateCredential({ id: userName, password });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}