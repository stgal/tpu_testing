import { Module } from "@nestjs/common";
import { TodoModule } from "./todo/todo.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    TodoModule,
    MongooseModule.forRoot('mongodb://localhost:27018/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
