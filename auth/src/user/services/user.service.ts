import { Injectable } from "@nestjs/common";
import { ICreateUserOptions, IGetByIdUserOptions, IUser } from "./user.interface";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async create(createUserOptions: ICreateUserOptions): Promise<IUser> {
    return this.userRepository.create(createUserOptions.password);
  }

  async getById(getByIdUserOptions: IGetByIdUserOptions): Promise<IUser> {
    return this.userRepository.getById(getByIdUserOptions.id);
  }
}
