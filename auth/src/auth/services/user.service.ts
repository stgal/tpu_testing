import { Injectable } from "@nestjs/common";
import { ICreateUserOptions, IGetByIdUserOptions, IUser } from "../interfaces";
import { TokensService } from "./token.service";
import { UserService as UserServiceOriginal } from 'src/user/services/user.service';
import { Nullable } from "src/utils/types";

@Injectable()
export class UserService {
  constructor(
    private readonly userService: UserServiceOriginal,
  ) {}
  
  async create(createUserOptions: ICreateUserOptions): Promise<IUser> {
    return this.userService.create(createUserOptions);
  }

  async getById(getUserOptions: IGetByIdUserOptions): Promise<Nullable<IUser>> {
    return this.userService.getById(getUserOptions);
  }
}