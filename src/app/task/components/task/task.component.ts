import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddTaskComponent } from './modal/add-task/add-task.component';
import { TaskService } from 'src/app/core/service/task-api/task.service';
import { FormBuilder, Validators } from '@angular/forms';
import { regex } from 'src/app/core/validators/RegularExpressions/regex';
import { RegisterService } from 'src/app/core/service/api/register.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  dataSource: any;
  currentitem: any;
  getUsersLists: any;
  Dialog: MatDialogRef<AddTaskComponent> | undefined;
  constructor(
    public dialogModel: MatDialog,
    public _taskService: TaskService,
    private fb: FormBuilder,
    public _registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.getDropdownData();
    this.getUsers();
  }

  profileForm = this.fb.group({
    id: ['', []],
    addTask: ['',],
    users: ['',],
  });

  getDropdownData() {
    this._registerService.get().subscribe({
      next: (data: any) => {
        this.getUsersLists = data.map((item: any) => {
          return item.FirstName;
        });
        console.log(this.getUsersLists);
      },
    });
  }

  filterTickets(status: string) {
    return this.dataSource?.filter((item: any) => item.status === status);
  }

  OnAddTaskClick() {
    debugger;
    let req: any = this.profileForm.value;
    req['status'] = 'To do';
    this._taskService.add(this.profileForm.value).subscribe((res) => {
      this.profileForm.reset();
      this.getUsers();
    });
  }
  onDragStart(item: any) {
    this.currentitem = item;
  }

  onDrop(event: any, status: string) { debugger
    event.preventDefault();
    const record = this.dataSource.find(
      (item: any) => item.id === this.currentitem.id
    );
    if (record != undefined) {
      record.status = status;
    }
    this.currentitem = null;
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  register() {
    let req: any = this.profileForm.value;
    req['status'] = 'To do';
    this._taskService.add(this.profileForm.value).subscribe((res) => {
      this.getUsers();
    });
  }

  getUsers(): void {
    this._taskService.get().subscribe((res: any) => {
      this.dataSource = res;
    });
  }
}
