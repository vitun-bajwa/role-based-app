import { Component, OnInit } from '@angular/core';
import { AllChartsComponent } from '../all-charts/all-charts.component';
import Chart from 'chart.js/auto';
import { CommonService } from 'src/app/core/service/charts/common.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent extends AllChartsComponent {
  public constructor(public service: CommonService) {
    super(service);
  }
  chart:any
  override showChartData(labeldata: any, realdata: any, colordata: any) {
    this.chart = new Chart('MyChart', {
      type: 'line',
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'No of sales',
            data: realdata,
            backgroundColor: colordata,
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
