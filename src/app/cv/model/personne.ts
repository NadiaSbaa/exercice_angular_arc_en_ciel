import { ThrowStmt } from '@angular/compiler';

export class Personne {
  constructor(
    public id: number = 0,
    public name: string = '',
    public firstname: string = '',
    public job: string = '',
    public path: string = '',
    public cin: number = 0,
    public age: number = 0,
  ){
      this.age = age;
      this.id = id;
      this.name = name;
      this.firstname = firstname;
      this.job = job;
      this.cin = cin;
      this.path = path;
  }
}
