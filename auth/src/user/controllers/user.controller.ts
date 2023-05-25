import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserResponseDto } from '../dtos/user';
import { UserId } from 'src/utils/decorators';
import { AuthGuard } from 'src/auth/strategies/jwt.strategy';

@Controller('user')
export class UserController {
  constructor() {}

  @UseGuards(AuthGuard)
  @Get()
  async get(
    @UserId() id: string,
  ): Promise<UserResponseDto> {
    return { id };
  }
}
