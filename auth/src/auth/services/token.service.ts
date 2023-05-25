import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IGetTokenOptions } from '../interfaces/token.interface';


@Injectable()
export class TokensService {
  constructor(
    protected readonly jwtService: JwtService,
  ) {}

  decode(token: string): IGetTokenOptions {
    return this.jwtService.decode(token) as IGetTokenOptions;
  }

  get(tokenOptions: IGetTokenOptions): string {
    return this.jwtService.sign(tokenOptions);
  }
}
