import { IsString } from "class-validator";

export class DeleteTodoRequestDto {
  @IsString()
  id: string;
}
