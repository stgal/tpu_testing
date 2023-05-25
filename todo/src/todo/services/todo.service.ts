import { Injectable } from "@nestjs/common";
import { TodoRepository } from "../repositories/todo.repository";
import { ICreateTodoOptions, ITodo } from "./interfaces";

@Injectable()
export class TodoService {
  constructor(
    private readonly todoRepository: TodoRepository
  ) {}

  async create(createTodoOptions: ICreateTodoOptions): Promise<ITodo> {
    return this.todoRepository.create(createTodoOptions)
  }

  async getByOwner(owner: string): Promise<ITodo[]> {
    return this.todoRepository.getByOwner(owner);
  }

  async getById(id: string): Promise<ITodo> {
    return this.todoRepository.getById(id);
  }

  async deleteById(id: string): Promise<void> {
    return this.todoRepository.deleteById(id);
  }
}
