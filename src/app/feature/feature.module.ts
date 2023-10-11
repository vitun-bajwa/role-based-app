import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { AllChartsComponent } from './components/charts/all-charts/all-charts.component';
import { DoughnutComponent } from './components/charts/doughnut/doughnut.component';
import { LineComponent } from './components/charts/line/line.component';
import { PieComponent } from './components/charts/pie/pie.component';
import { BarComponent } from './components/charts/bar/bar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    BarComponent,
    AllChartsComponent,
    DoughnutComponent,
    LineComponent,
    PieComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    SharedModule
  ]
})
export class FeatureModule { }
