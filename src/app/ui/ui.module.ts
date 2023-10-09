import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { RegisterService } from '../core/service/register.service';
import { MatButtonModule } from '@angular/material/button';

const module = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    ...module,
  ],
  exports:[
    ...module,
  ],
  providers:[
    ToastrService,
    RegisterService
  ]
})
export class UiModule { }
