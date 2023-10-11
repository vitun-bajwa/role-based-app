import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { DialogComponent } from './components/user/modal/dialog/dialog.component';
import { UiModule } from '../ui/ui.module';
import { SearchPipe } from '../core/pipe/search/search.pipe';
import { HighlighterPipe } from '../core/pipe/highlighter/highlighter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserComponent,
    DialogComponent,
    HighlighterPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UiModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
  ],
  providers:[
    
  ]
})
export class UserModule { }
