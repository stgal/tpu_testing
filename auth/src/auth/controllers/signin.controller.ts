import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { SigninResponseDto } from '../dtos/signin';
import { SigninService } from '../services/signin.service';
import { LocalAuthGuard } from '../guards';


@Controller('signin')
export class SigninController {
  constructor(
    private readonly signinService: SigninService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async signin(
    @Request() req,
  ): Promise<SigninResponseDto> {
    return this.signinService.signin(req.user)
  }
}
