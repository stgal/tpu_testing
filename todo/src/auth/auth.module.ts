import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    // TODO GET FROM CONFIG
    JwtModule.register({
      global: true,
      secret: 'SUPER_SECURE_JWT',
    }),
  ],
})
export class AuthModule {}
