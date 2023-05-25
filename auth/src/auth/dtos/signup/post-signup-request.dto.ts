import { IsString } from "class-validator";

export class PostSignupRequestDto {
  @IsString()
  password: string;
}
