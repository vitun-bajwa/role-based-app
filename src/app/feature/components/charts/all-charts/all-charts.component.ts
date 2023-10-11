import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { CommonService } from 'src/app/core/service/charts/common.service';

@Component({
  selector: 'app-all-charts',
  templateUrl: './all-charts.component.html',
  styleUrls: ['./all-charts.component.css']
})
export class AllChartsComponent implements OnInit {
  data: any;
  dataAmount: any[] = [];
  dataYear: any[] = []
  dataColor: any[] = []
  dataBorderColor: any[] = []

  constructor(private charts: CommonService) { }

  ngOnInit() {
    this.charts.showData().subscribe((res: any) => {
      this.data = res;
      if (this.data != null) {
        for (let i = 0; i < this.data.length; i++) {
          this.dataYear.push(this.data[i].year);
          this.dataAmount.push(this.data[i].amount);
          this.dataColor.push(this.data[i].color);
          this.dataBorderColor.push(this.data[i].borderColor);
        }
      }
      this.showChartData(this.dataYear, this.dataAmount, this.dataColor, this.dataBorderColor);
    })
  }

  showChartData(dataYear:any, dataAmount:any, dataColor:any, dataBorderColor:any) {

  }

}
