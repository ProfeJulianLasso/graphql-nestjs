import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class NewUserArgs {
  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  lastname?: string;
}
