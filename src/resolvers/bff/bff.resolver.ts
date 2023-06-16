import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { NewUserArgs } from 'src/dto/args/new-user.args';
import { ExampleInput } from 'src/dto/inputs/example.input';
import { UserOutput } from 'src/dto/outputs/user.output';
import { AppService } from '../../services/app.service';

@Resolver()
export class BffResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String, { name: 'helloWorld1' })
  hello1(): string {
    return this.appService.getHello();
  }

  @Query(() => String, { name: 'helloWorld2' })
  hello2(@Args('name', { type: () => String }) nombre: string): string {
    return this.appService.getHello(nombre);
  }

  @Query(() => String, { name: 'helloWorld3' })
  hello3(@Args() data: NewUserArgs): string {
    return this.appService.getHello2(data);
  }

  @Query(() => UserOutput, { name: 'helloWorld4' })
  hello4(): UserOutput {
    return this.appService.getHello3();
  }

  @Mutation(() => UserOutput, { name: 'helloWorld5' })
  hello5(@Args('data') data: ExampleInput): Promise<UserOutput> {
    console.log(data);
    return this.appService.getHello4();
  }

  @Mutation(() => UserOutput, { name: 'helloWorld6' })
  hello6(@Args('data') data: ExampleInput): Observable<UserOutput> {
    console.log(data);
    return this.appService.getHello5();
  }
}
