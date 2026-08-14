import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  title!: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 1000)
  content!: string;
}
