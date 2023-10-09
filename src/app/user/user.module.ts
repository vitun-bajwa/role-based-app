import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { DialogComponent } from './components/user/modal/dialog/dialog.component';


@NgModule({
  declarations: [
    UserComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports:[
    UserComponent
  ]
})
export class UserModule { }
