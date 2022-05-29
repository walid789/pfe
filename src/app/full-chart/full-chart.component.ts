import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};
@Component({
  selector: 'app-full-chart',
  templateUrl: './full-chart.component.html',
  styleUrls: ['./full-chart.component.css']
})
export class FullChartComponent implements OnInit {
  chartOptions:any;
  constructor() { 
     
    this.chartOptions = {
      series: [
        {
          name: "This Year",
          data: [31, 40, 28, 51, 42, 109, 100, 42, 109, 100,40,30]
        },
        {
          name: "Last Year",
          data: [11, 32, 45, 32, 34, 52, 41,34, 52, 41,30,50]
        }
      ],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "date",
        categories: [
          "January", 
          "February",
          " March",
           "April", 
           "May",
            "June", 
            "July", "August", "September", "October", "November" , "December"

        ]
      },
      tooltip: {
        x: {
      
        }
      }
    };
  }


  ngOnInit(): void {
  }
 /* public generateData(baseval:any, count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }*/
}
