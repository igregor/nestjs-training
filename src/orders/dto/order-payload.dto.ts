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

  // NOTE @g.wojtanowicz 1994-11-05T08:15:30-05:00
  // https://www.w3.org/TR/NOTE-datetime
  @IsDateString()
  @IsNotEmpty()
  created: string;
}
