import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { AllChartsComponent } from '../all-charts/all-charts.component';
import { CommonService } from 'src/app/core/service/charts/common.service';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent extends AllChartsComponent{

  constructor(public service: CommonService) {
    super(service);
  }
  chart:any
  override showChartData(labeldata: any, realdata: any, colordata: any) {
    this.chart = new Chart("MyChart", {
      type: 'doughnut',
      data: {
        labels: labeldata,
        datasets: [
          {
            label: "No of sales",
            data: realdata,
            backgroundColor: colordata,
            borderWidth: 2,
          },
        ]
      },
      options: {
        aspectRatio: 2,
      }
    });
  }
}
