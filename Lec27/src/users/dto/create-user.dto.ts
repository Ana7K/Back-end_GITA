import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 20)
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @Length(2, 20)
  @IsNotEmpty()
  lastName!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsNumber()
  @IsNotEmpty()
  @Max(100)
  age!: number;
}
