import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { getUserId } from 'src/utils/http-headers';
import { TodoService } from '../services/todo.service';
import { DeleteTodoRequestDto } from '../dtos/delete-todo-request.dto';

@Injectable()
export class OwnerGuard implements CanActivate {
  constructor(
    private readonly todoService: TodoService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const userId = getUserId(undefined, context);
    const body = request.body as DeleteTodoRequestDto
    const todo = await this.todoService.getById(body.id);

    if (todo.owner !== userId) {
      throw new ForbiddenException();
    }

    return true;
  }
}