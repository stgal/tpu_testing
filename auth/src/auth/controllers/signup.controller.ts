import { Body, Controller, Post } from '@nestjs/common';
import { PostSignupRequestDto, SignupResponseDto } from '../dtos/signup';
import { SignupService } from '../services/signup.service';

@Controller('signup')
export class SignupController {
  constructor(
    private readonly signupService: SignupService,
  ) {}

  @Post()
  async signup(
    @Body() body: PostSignupRequestDto,
  ): Promise<SignupResponseDto> {
    return this.signupService.signup(body)
  }
}
