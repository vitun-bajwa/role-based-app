import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import {MatIconModule} from '@angular/material/icon';

const module = [MatIconModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UiRoutingModule,
    ...module
  ],
  exports:[
    ...module,
  ]
})
export class UiModule { }
