import { Type } from 'class-transformer';
import { IsNumber, IsEmail } from 'class-validator';
import { ReadUserDetailsDto } from './read-user-details.dto';

export class ReadUserDto {
  @IsNumber()
  readonly id: number;

  @IsEmail()
  readonly email: string;

  readonly username: string;

  @Type(() => ReadUserDetailsDto)
  readonly details: ReadUserDetailsDto;
}