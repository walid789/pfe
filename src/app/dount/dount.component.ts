import { Component, OnInit } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { AppServiseService } from '../app-servise.service';

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
  data:any;
  x1:number=0;
  x3:number=0;
  x2:number=0;
  x4:number=0;
  tab:any=[];
  tab1:any=[];

  constructor(private service:AppServiseService) {
    console.log(this.data)
  
   }

  ngOnInit(): void {
    var tab:any=this.getDataFromAPI();
    console.log(tab[0])
  }
  calcul(data:any){
    let x1=0
    ,x2=0,x3=0,x4=0;
    for (let x=0;x<data.length;x++){
      if(this.data[x].categorie=='meuble'){
       x1=x1+this.data[x].quanite;
      }
      if(this.data[x].categorie=='decoration'){
        x2=x2+this.data[x].quanite;
      }
      if(this.data[x].categorie=='vetement'){
       x3=x3+this.data[x].quanite;
      }
      if(this.data[x].categorie=='accessoire'){
        x4=x4+this.data[x].quanite;
      }
    }
    let tab:any=[x1,x2,x3,x4]
    return tab
  }

  getDataFromAPI(){
   
    let tab2:any=[];
    let data:any=[];
    this.service.getData().subscribe((Response)=>{
  this.data=Response;
  tab2=this.calcul(this.data);
  this.chartOptions = {
    series: [tab2[0],tab2[1],tab2[2],tab2[3]],
    chart: {
      type: "donut"
    },
    labels: ["Meuble", "Decoration", "Vetement", "Accessoire"],
    responsive: [
      {
        breakpoint: 150,
        options: {
          chart: {
            width: 100,
            height:100
          },
          legend: {
          
            position: "top",
            
          }
        }
      }
    ]
  };
  })
  
   

      }
  
    

}
