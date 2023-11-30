import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/service/todo/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo = '';

  constructor(public todoService: TodoService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.todoService.addTodo(this.todo);
    this.todo = '';
  }

}
