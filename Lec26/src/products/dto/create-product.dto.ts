import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsNumber,
  Min,
  Max,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  title!: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(200)
  description!: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(999999)
  price!: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(999999)
  stock!: number;

  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  category!: string;
}
