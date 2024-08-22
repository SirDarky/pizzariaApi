import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetClientArgs {
  @Field()
  @IsNotEmpty()
  clientId: string;
}
