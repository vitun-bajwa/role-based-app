import { Component, OnInit } from '@angular/core';
import { AllChartsComponent } from '../all-charts/all-charts.component';
import Chart from 'chart.js/auto';
import { CommonService } from 'src/app/core/service/charts/common.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent extends AllChartsComponent {

  public constructor(public service: CommonService) {
    super(service);
  }
  chart: any
  override showChartData(labeldata: any, realdata: any, colordata: any) {
    this.chart = new Chart('MyChart', {
      type: 'bar',
      data: {
        labels: labeldata,
        datasets: [
          {
            label: 'No of sales',
            data: realdata,
            backgroundColor: colordata,
            barThickness: 40,
            borderWidth: 2,
          },
          {
            label: 'No of sales',
            data: realdata,
            backgroundColor: colordata,
            barThickness: 40,
            borderWidth: 2,
          },
          {
            label: 'No of sales',
            data: realdata,
            backgroundColor: colordata,
            barThickness: 40,
            borderWidth: 2,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          },
        }
      }
    });
  }
}

