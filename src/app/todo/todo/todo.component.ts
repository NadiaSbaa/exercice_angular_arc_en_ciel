import { Todo } from './../model/todo';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  addingTodo(designation: string, description: string): void{
    this.todoService.addTodo(designation, description);
  }

  gettingTodos(): Todo[]{
    return this.todoService.getTodos();
  }
  deletingTodo(id: number): void{
    this.todoService.deleteTodo(id);
  }

}
