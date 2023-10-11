import { Component, OnInit } from '@angular/core';
import { AllChartsComponent } from '../all-charts/all-charts.component';
import Chart from 'chart.js/auto';
import { CommonService } from 'src/app/core/service/charts/common.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent extends AllChartsComponent {
  public constructor(public service: CommonService) {
    super(service);
  }
  chart:any
  override showChartData(labeldata: any, realdata: any, colordata: any) {
    this.chart = new Chart('MyChart', {
      type: 'pie',
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'No of sales',
            data: realdata,
            backgroundColor: colordata,
            hoverOffset: 4,
            borderWidth: 2,
          },
        ],
      },
      options: {
        aspectRatio: 2,
      },
    });
  }
}

