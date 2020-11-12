import { Todo } from './../todo/model/todo';
import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor() { }

  getIndexToDoFromId(id: number): number{
    for ( let i = 0 ; i < this.todos.length ; i ++){
      if (this.todos[i].id === id){
        return i;
      }
    }
  }
  addTodo(designation: string, description: string): void{
    this.todos.push(new Todo(this.todos.length + 1, designation, description));
  }

  getTodos(): Todo[]{
    return this.todos;
  }

  loggerTodo(id: number): void{
    console.log(this.todos[this.getIndexToDoFromId(id)]);
  }

  deleteTodo(id: number): void{
    this.todos.splice(this.getIndexToDoFromId(id), 1);
  }

}
