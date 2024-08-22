import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

@ArgsType()
export class GetClientsArgs {
  @Field(() => [String])
  @IsArray()
  clientsId: string[];
}
