import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateClientInput {
  @Field()
  @IsNotEmpty()
  clientId: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  phone: string;

  @Field()
  @IsOptional()
  @IsNotEmpty()
  email: string;
}
