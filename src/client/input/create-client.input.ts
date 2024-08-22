import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import {
  BusinessErrorMessage,
  CodeMessage,
} from '../../shared/exception/bussiness.error.message';

@InputType()
export class CreateClientInput {
  @IsString()
  @IsNotEmpty({ message: BusinessErrorMessage[CodeMessage.KEY_001] })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: BusinessErrorMessage[CodeMessage.KEY_001] })
  email: string;

  @IsString()
  @IsNotEmpty({ message: BusinessErrorMessage[CodeMessage.KEY_001] })
  password: string;

  @IsString()
  @IsNotEmpty({ message: BusinessErrorMessage[CodeMessage.KEY_001] })
  phone: string;
}
