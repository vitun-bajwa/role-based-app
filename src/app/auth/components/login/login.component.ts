import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/core/service/api/register.service';
import { MyErrorStateMatcher } from 'src/app/core/validators/error';
import { reg } from 'src/app/core/validators/reg';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _router: Router,
    private _toastr: ToastrService,
    private fb: FormBuilder,
    private role: RegisterService
  ) {}
  @Input() empregister!: FormGroup;
  hide = true;
  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
    this.getRecords();
    this.empregister = this.fb.group({
      Email: [
        '',
        [Validators.required, Validators.email, Validators.pattern(reg.email)],
      ],
      Password: ['', [Validators.required, Validators.pattern(reg.password)]],
    });
  }
  onSubmit() {
    if (this.empregister.valid) {
      if(this.empregister.value.Password === this.users.Password){
        this._toastr.success('You have been successfully login.', 'Success');
        this._router.navigate(['/dashboard']);
        localStorage.setItem('empregister',JSON.stringify(this.empregister.value));
        this.empregister.reset();
      }
      else{
        this._toastr.error('Password is incorrect.', 'Error');
      }
    }
  }

  users: any;
  getRecords() {
      this.role.get().subscribe((res:any) => {
        res.map((item:any) => {
          this.users = item.Password
          console.log(this.users);
      });
    });
  }
}