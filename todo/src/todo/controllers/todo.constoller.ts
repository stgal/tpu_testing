import { Body, Controller, Delete, Get, Post, Request, UseGuards } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { AuthGuard } from 'src/auth/strategies/jwt.strategy';
import { UserId } from 'src/utils/decorators';
import { PostTodoRequestDto } from '../dtos/post-todo-request.dto';
import { TodoIdResponseDto } from '../dtos/todo-id-response.dto';
import { TodoResponseDto } from '../dtos/todo-response.dto';
import { OwnerGuard } from '../guards/owner.guard';
import { DeleteTodoRequestDto } from '../dtos/delete-todo-request.dto';

@Controller()
export class TodoController {
  constructor(
    private readonly todoService: TodoService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('/create')
  async create(
    @UserId() id: string,
    @Body() body: PostTodoRequestDto
  ): Promise<TodoIdResponseDto> {
    const todo = await this.todoService.create({
      owner: id,
      title: body.title,
      description: body.description,
    });

    return { id: todo.id };
  }

  @UseGuards(AuthGuard)
  @Get('/get')
  async get(
    @UserId() id: string,
  ): Promise<TodoResponseDto[]> {
    return this.todoService.getByOwner(id);
  }

  @UseGuards(AuthGuard, OwnerGuard)
  @Delete('/delete')
  async delete(
    @UserId() id: string,
    @Body() body: DeleteTodoRequestDto,
  ): Promise<TodoIdResponseDto> {
    await this.todoService.deleteById(body.id);

    return { id };
  }
}
