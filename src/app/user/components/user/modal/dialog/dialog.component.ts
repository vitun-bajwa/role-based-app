import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/core/service/api/register.service';
import { regex } from 'src/app/core/validators/RegularExpressions/regex';
import { datePickerValidator } from 'src/app/core/validators/datepickervalidator';
import { passwordvalidaator } from 'src/app/core/validators/passwordvalidaator';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiservice: RegisterService,
    public cdr: ChangeDetectorRef,
    public _toastr: ToastrService
  ) {
    this.name = 'vitun';
    this.minDate = new Date(new Date().getFullYear() - 50, 0, 1);
    this.maxDate = new Date(
      new Date().getFullYear() + 0,
      new Date().getMonth(),
      new Date().getDate()
    );
  }
  ngOnInit() {
    this.assignvalue();
  }
  name: string;
  Phide: boolean = true;
  CPhide: boolean = true;
  matchError: boolean = false;
  PermChek: boolean = false;
  minDate: Date;
  maxDate: Date;
  changeBtn: boolean = false;
  loading: boolean = false;

  profileForm = this.fb.group({
    id: ['', []],
    FirstName: ['', [Validators.required, Validators.pattern(regex.name)]],
    LastName: ['', [Validators.required, Validators.pattern(regex.name)]],
    Email: [
      '',
      [Validators.required, Validators.email, Validators.pattern(regex.email)],
    ],
    Password: ['', [Validators.required, Validators.pattern(regex.password)]],
    ConfirmPassword: [
      '',
      [
        Validators.required,
        Validators.pattern(regex.password),
        passwordvalidaator(),
      ],
    ],
    Postalcode: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(regex.postcode),
      ],
    ],
    City: ['Chandigarh', [Validators.required]],

    Date: ['', [Validators.required, datePickerValidator()]],
    role: ['admin', [Validators.required]]
  });

  register() {
    this.loading = true;
    if (this.changeBtn == true) {
      this.apiservice
        .update(this.profileForm.value)
        .subscribe((res: any) => {
          if (res) {
            this.loading = false;
            this.dialogRef.close();
            this._toastr.success('Your account has been created.', 'Success');
            return console.log(res);
          }
        });
    } else {
      this.apiservice.add(this.profileForm.value).subscribe((res: any) => {
        if (res) {
          this.dialogRef.close();
          return console.log(res);
        }
        return;
      });
    }
  }
  presskey(value: any) {
    if (value.key == 'e' || value.key == '.') {
      value.preventDefault();
    }
  }
  assignvalue() {
    if (this.data) {
      this.changeBtn = true;
      const { data } = this.data;
      this.profileForm.setValue({
        id: data.id,
        FirstName: data.FirstName,
        LastName: data.LastName,
        Email: data.Email,
        Password: data.Password,
        ConfirmPassword: data.ConfirmPassword,
        City: data.City,
        Postalcode: data.Postalcode,
        Date: data.Date,
        role: data.role
      });
    }
  }
}
