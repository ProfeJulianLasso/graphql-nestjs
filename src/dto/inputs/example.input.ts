import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ExampleInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;
}
