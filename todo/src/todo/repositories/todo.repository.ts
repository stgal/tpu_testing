import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Nullable } from 'src/utils/types';
import { Todo, TodoDocument } from '../schemas/todo.schema';
import { ICreateTodoOption, ITodo } from './interfaces';

@Injectable()
export class TodoRepository {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async create(createTodoOptions: ICreateTodoOption): Promise<ITodo> {
    const todo = new this.todoModel(createTodoOptions);

    const createdTodo = await todo.save();

    return {
      id: createdTodo.id,
      owner: createdTodo.owner,
      title: createdTodo.title,
      description: createdTodo.description
    };
  }

  async getById(id: string): Promise<ITodo> {
    const todo = await this.todoModel.findById(id);

    return {
      id: todo.id,
      owner: todo.owner,
      title: todo.title,
      description: todo.description,
    }
  };

  async getByOwner(owner: string): Promise<ITodo[]> {
    const todos = await this.todoModel.find({ owner });

    return todos.map(({ 
      id, 
      owner, 
      title, 
      description 
    }) => {
      return {
        id,
        owner,
        title,
        description
      }
    });
  }

  async deleteById(id: string): Promise<void> {
    await this.todoModel.deleteOne({ _id: id });
  }
}
