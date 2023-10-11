import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }
  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['2018','2019', '2020', '2021','2022',
								 '2023', ],
	       datasets: [
          {
            label: "oppo",
            data: ['650','555','560','600','510','530'],
            backgroundColor: 'blue'
          },
          {
            label: "vivo",
            data: ['500', '542','540','550','530','600' ],
            backgroundColor: 'limegreen'
          },
          {
            label: "samsung",
            data: ['600','555','560','600','510','530'],
            backgroundColor: 'yellow'
          },
          {
            label: "realme",
            data: ['300', '242','440','550','530','600' ],
            backgroundColor: 'red'
          },
          {
            label: "redmi",
            data: ['200','255','350','400','510','530'],
            backgroundColor: 'skyblue'
          }
        ]
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
