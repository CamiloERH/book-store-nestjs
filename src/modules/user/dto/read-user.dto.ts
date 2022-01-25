import { Exclude, Expose, Type } from 'class-transformer';
import { IsNumber, IsEmail } from 'class-validator';
import { ReadRoleDto } from '../../role/dtos/read-role.dto';
import { ReadUserDetailsDto } from './read-user-details.dto';

@Exclude()
export class ReadUserDto {
  @Expose()
  @IsNumber()
  readonly id: number;

  @Expose()
  @IsEmail()
  readonly email: string;

  @Expose()
  readonly username: string;

  @Expose()
  @Type(() => ReadUserDetailsDto)
  readonly details: ReadUserDetailsDto;

  @Expose()
  @Type(() => ReadRoleDto)
  readonly roles: ReadRoleDto[];
}
