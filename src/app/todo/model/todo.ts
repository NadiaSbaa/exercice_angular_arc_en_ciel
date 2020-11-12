import { ThrowStmt } from '@angular/compiler';

export class Todo {
  constructor(
    public id: number = 0,
    public designation: string = '',
    public description: string = '',
  ){
      this.id = id;
      this.designation = designation;
      this.description = description;
  }
}
