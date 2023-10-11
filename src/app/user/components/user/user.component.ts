import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from './modal/dialog/dialog.component';
import { Users } from 'src/app/core/utils/form';
import { constants } from 'src/app/core/utils/const';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/core/service/api/register.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoaderService } from 'src/app/core/service/loader/loader.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  ngOnInit(): void {
    this.getUsers();
  }
  showPassword: boolean = false;
  Dialog: MatDialogRef<DialogComponent> | undefined;

  constructor(
    private _router: Router,
    public dialogModel: MatDialog,
    public apiservice: RegisterService,
    public loader: LoaderService,
    public cdr: ChangeDetectorRef,
    public _toastr: ToastrService
  ) {}

  searchinput: any = '';
  employee: Users[] = [];

  displayedColumns: string[] = [
    constants.id,
    'FirstName',
    'LastName',
    'Email',
    // 'Password',
    // 'PermanentAddress',
    'City',
    'Postalcode',
    'Date',
    // 'TemporaryAddress',
    'role',
    'action',
    'delete',
  ];

  dataSource = new MatTableDataSource(this.employee);

  @ViewChild(MatPaginator, { static: true }) paginator: any = MatPaginator;

  getUsers(): void {
    this.apiservice.get().subscribe((res: any) => {
      this.dataSource.data = res;
      console.log(this.dataSource.data);
    });
  }

  deletUser(id: number) {
    this.apiservice.delete(id).subscribe((res: any) => {
      this.getUsers();
      this._toastr.success('Your account has been deleted', 'Success');
      this.cdr.detectChanges();

      return console.log(res);
    });
  }
  editUser(data: any) {
    if (data.id) {
      this.Dialog = this.dialogModel.open(DialogComponent, {
        data: { data },
        height: '100%',
        width: '60%',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '200ms',
        disableClose: true,
      });
      this.Dialog.afterClosed().subscribe((result: any) => {
        this.getUsers();
        this._toastr.success('Your account has been edit.', 'Success');
        // this.cdr.detectChanges();
      });
    } else {
      this.Dialog = this.dialogModel.open(DialogComponent, {
        height: '100%',
        width: '60%',
        enterAnimationDuration: '500ms',
        exitAnimationDuration: '200ms',
        disableClose: true,
      });
      this.Dialog.afterClosed().subscribe((result: any) => {
        this.getUsers();
        // this.cdr.detectChanges();
      });
    }
  }
  applyFilter(event: any) {
    if (event.target.value == '') {
      this.getUsers();
    } else {
      this.apiservice
        .searchUser(this.dataSource.data, event.target.value)
        .subscribe({
          next: (res: any) => {
            this.dataSource.data = res;
            console.log('res', res);
          },
        });
    }
  }
}
