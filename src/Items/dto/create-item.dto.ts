import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  hourRemind: string;

  @IsNotEmpty()
  @IsString()
  dateRemind: string;

  @IsNotEmpty()
  @IsNumber()
  type: number;

  @IsNotEmpty()
  @IsString()
  notes: string;

  @IsNotEmpty()
  @IsString()
  latLng: string;
}