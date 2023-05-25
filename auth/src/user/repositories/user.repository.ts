import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { IUser } from './user.interface';
import { Nullable } from 'src/utils/types';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(password: string): Promise<IUser> {
    const user = new this.userModel({ password });

    const createdUser = await user.save();

    return {
      id: createdUser.id,
      password: createdUser.password,
    }
  }

  async getById(id: string): Promise<Nullable<IUser>> {
    const user = await this.userModel.findById(id);

    if (!user) {
      return null
    }

    return {
      id: user.id,
      password: user.password,
    }
  }
}
