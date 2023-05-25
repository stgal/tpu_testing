import { Module } from '@nestjs/common';
import { Todo, TodoSchema } from './schemas/todo.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoRepository } from './repositories/todo.repository';
import { TodoService } from './services/todo.service';
import { TodoController } from './controllers/todo.constoller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }])
  ],
  controllers: [TodoController],
  providers: [TodoRepository, TodoService],
})
export class TodoModule {}
