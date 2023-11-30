import { Injectable } from '@angular/core';
import { Todo } from '../../models/Todo';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  fav = [];
  todoList: Todo[] = [
    {
      id: 1,
      title: 'Todo One',
      isCompleted: false,
      isFavorite: false,
      date: new Date('4-15-2020')
    },
    {
      id: 2,
      title: 'Todo Two',
      isCompleted: false,
      isFavorite: false,
      date: new Date('5-15-2020')
    },
    {
      id: 3,
      title: 'Todo Three',
      isCompleted: false,
      isFavorite: false,
      date: new Date('6-15-2020')
    }
  ];

  constructor(private deletePopup: ToastrService) { }

  deleteTodo(item:any) {
    let index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);

    // this.deletePopup.success(`Todo ${item.id} Deleted!`);
  }

  addTodo(title:any) {
    let id = this.todoList.length + 2;

    const item: Todo = {
      id: id,
      isCompleted: false,
      isFavorite: false,
      date: new Date(),
      title: title
    }
    this.todoList.unshift(item);
  }

  updateFav(){
    this.fav = JSON.parse(localStorage.getItem('favorite') || '');
  }
}
