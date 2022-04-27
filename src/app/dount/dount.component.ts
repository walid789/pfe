import { Component, OnInit } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-dount',
  templateUrl: './dount.component.html',
  styleUrls: ['./dount.component.css']
})
export class DountComponent implements OnInit {
  chartOptions:any;
  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: "top"
            }
          }
        }
      ]
    };
   }

  ngOnInit(): void {
  }

}
