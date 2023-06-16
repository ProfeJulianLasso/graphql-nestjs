import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserOutput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  lastname?: string;

  @Field(() => Date)
  date: Date;
}
