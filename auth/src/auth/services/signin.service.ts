import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ISignin, ISigninOptions, IUser } from "../interfaces";
import { TokensService } from "./token.service";
import { UserService } from "./user.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class SigninService {
  constructor(
    private readonly tokensService: TokensService,
    private readonly userService: UserService,
  ) {}

  async validateCredential(signinOptions: ISigninOptions): Promise<IUser> {
    const user = await this.userService.getById({ id: signinOptions.id });

    if (!user) {
      return null;
    };

    const isPasswordValid = await bcrypt.compare(signinOptions.password, user.password);

    if (!isPasswordValid) {
      return null;
    };

    return user;
  }

  async signin(signinOptions: ISigninOptions): Promise<ISignin> {
    const token = this.tokensService.get(signinOptions);

    return {
      token
    };
  };
}