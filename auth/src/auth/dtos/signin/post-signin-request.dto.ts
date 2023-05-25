import { IsString } from "class-validator";

export class PostSigninRequestDto {
  @IsString()
  id: string;

  @IsString()
  password: string;
}
