import { Injectable } from "@nestjs/common";
import { ISignup, ISignupOptions } from "../interfaces";
import { TokensService } from "./token.service";
import { UserService } from 'src/user/services/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupService {
  constructor(
    private readonly tokenService: TokensService,
    private readonly userService: UserService,
  ) {}

  async signup(signupOptions: ISignupOptions): Promise<ISignup> {
    const password = await bcrypt.hash(signupOptions.password, 2);
    const user = await this.userService.create({ password });
    const token = this.tokenService.get({ 
      id: user.id
    })

    return {
      id: user.id,
      token
    }
  };
}