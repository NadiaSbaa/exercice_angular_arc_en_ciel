import { LoggerService } from './logger.service';
import { Todo } from './../todo/model/todo';
import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private loggerService: LoggerService) { }

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

  loggerTodo(): void{
    this.loggerService.logger(this.todos)

  }

  deleteTodo(id: number): void{
    this.todos.splice(this.getIndexToDoFromId(id), 1);
  }

}
