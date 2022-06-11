import {
  IsEmail,
  IsDateString,
  IsString,
  IsArray,
  IsNotEmpty,
} from 'class-validator';

export class OrderPayloadDto {
  @IsNotEmpty()
  creator: any; // User;

  @IsArray()
  @IsNotEmpty()
  items: any[]; // Item[];

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
