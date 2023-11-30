import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddlistingRoutingModule } from './addlisting-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    TodoComponent,
    TodoFormComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AddlistingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddlistingModule { }
