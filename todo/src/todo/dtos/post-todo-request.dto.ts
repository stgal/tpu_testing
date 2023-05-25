import { IsString } from "class-validator";

export class PostTodoRequestDto {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
