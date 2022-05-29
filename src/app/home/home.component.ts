import { Component, OnInit } from '@angular/core';
import { AppServiseService } from '../app-servise.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AppServiseService]
})
export class HomeComponent implements OnInit {
  donne:any;
  i:number=0;
  tabMeuble:any=[]
  tabVet:any=[]
  tabAcc:any=[]
  tabDec:any=[]
  constructor( private service:AppServiseService ) { }
 
  ngOnInit() {
    this.getDataFromAPI();
  }
 

  getDataFromAPI(){
this.service.getData().subscribe((Response)=>{
  console.log("reponse from api",Response)
  this.donne=Response;
  for (let x=0;x<this.donne.length;x++){
    if (this.donne[x].categorie=='meuble'){
      this.tabMeuble.push(this.donne[x]);
    }
    if (this.donne[x].categorie=='decoration'){
      this.tabDec.push(this.donne[x]);
    }
    if (this.donne[x].categorie=='vetement'){
      this.tabVet.push(this.donne[x]);
    }
    if (this.donne[x].categorie=='accessoire'){
      this.tabAcc.push(this.donne[x]);
    }
  }

},(error)=>{console.log("eroor is ",error)}
)
  }

}
