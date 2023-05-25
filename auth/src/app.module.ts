import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  // TODO CONFIG
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
