import { Component, OnInit } from '@angular/core';
import { AppServiseService } from '../app-servise.service';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";
type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};
@Component({
  selector: 'app-columns-chart',
  templateUrl: './columns-chart.component.html',
  styleUrls: ['./columns-chart.component.css']
})
export class ColumnsChartComponent implements OnInit {
  chartOptions:any;
  constructor(private servise:AppServiseService) {
   
  }
   
  donne:any;
  ngOnInit(): void {
    this.getDataFromAPI()

  }
  getDataFromAPI(){
    this.servise.getBestSales().subscribe((Response)=>{
      console.log("reponse from api",Response)
      this.donne=Response;

      this.chartOptions = {
        series: [
          {
            name: "distibuted",
            data: [this.donne[0].count, this.donne[1].count, this.donne[2].count, this.donne[3].count, this.donne[4].count]
          }
        ],
        chart: {
          height: 273,
          type: "bar",
          events: {
            click: function(chart:any, w:any, e:any) {
              // console.log(chart, w, e)
            }
          }
        },
        colors: [
          "#008FFB",
          "#00E396",
          "#FEB019",
          "#FF4560",
          "#775DD0",
          "#546E7A",
          "#26a69a",
          "#D10CE8"
        ],
        plotOptions: {
          bar: {
            columnWidth: "45%",
            distributed: true
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: true
        },
        grid: {
          show: true
        },
        xaxis: {
          categories: [
           [this.donne[0].nom],
           [this.donne[1].nom],
           [this.donne[2].nom],
           [this.donne[3].nom],
           [this.donne[4].nom],
         
        
          ],
          labels: {
            style: {
              colors: [
                "#008FFB",
                "#00E396",
                "#FEB019",
                "#FF4560",
                "#775DD0",
                "#546E7A",
                "#26a69a",
                "#D10CE8"
              ],
              fontSize: "12px"
            }
          }
        }
      };
      
 
    },(error)=>{console.log("eroor is ",error)}
    )
      }


}
