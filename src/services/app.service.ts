import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { UserOutput } from 'src/dto/outputs/user.output';
import { NewUserArgs } from '../dto/args/new-user.args';

@Injectable()
export class AppService {
  getHello(nombre?: string): string {
    return 'Hello World! GraphQL ' + nombre;
  }

  getHello2(data: NewUserArgs): string {
    return 'Hello World! GraphQL ' + data.name + ' ' + data.lastname;
  }

  getHello3(): UserOutput {
    const data = new UserOutput();
    data.id = 1;
    data.name = 'Julian';
    data.lastname = 'Lasso';
    data.date = new Date();
    return data;
  }

  getHello4(): Promise<UserOutput> {
    const data = new UserOutput();
    data.id = 2;
    data.name = 'Andres 2';
    data.lastname = 'Figueroa';
    data.date = new Date();
    return Promise.resolve(data);
  }

  getHello5(): Observable<UserOutput> {
    const data = new UserOutput();
    data.id = 2;
    data.name = 'Carlos';
    data.lastname = 'Gerardo';
    data.date = new Date();
    return from(Promise.resolve(data));
  }
}
