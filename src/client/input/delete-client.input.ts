import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DeleteClientInput {
  @Field()
  @IsNotEmpty()
  clientId: string;
}
