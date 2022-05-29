import { Component, OnInit,ViewChild } from '@angular/core';
import { AppServiseService } from '../app-servise.service';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  donne:any;
  nbSales:number=0;
  nbUsers:number=0;

  constructor(private servise:AppServiseService) { 
    
   
  }

  ngOnInit(): void {
   this.getDataFromAPI()
  }
  getDataFromAPI(){
    this.servise.getCommande().subscribe((Response)=>{
      this.donne=Response;
      const now = new Date();
      for(let i=0;i<this.donne.length;i++){
    if (this.donne[i].date==now.toLocaleDateString()){
      this.nbSales++;
    }
   

         }
    }
    ,(error)=>{console.log("eroor is ",error)}
    );
    this.servise.getAllUser().subscribe((Response)=>{
      this.donne=Response;
      const now = new Date();
      for(let i=0;i<this.donne.length;i++){
    if (this.donne[i].date==now.toLocaleDateString()){
      this.nbSales++;
    }
   

         }
    }
    ,(error)=>{console.log("eroor is ",error)}
    )

 
 
    
  
}
}
