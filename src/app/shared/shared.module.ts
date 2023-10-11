import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SharedRoutingModule } from './shared-routing.module';
import { UserModule } from '../user/user.module';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    UserModule,
    UiModule
  ],
  exports:[
    LayoutComponent,
    SidebarComponent,
    HeaderComponent
  ]

})
export class SharedModule { }
