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
  constructor( private service:AppServiseService ) { }
 
  ngOnInit() {
    this.getDataFromAPI();
  }
 

  getDataFromAPI(){
this.service.getData().subscribe((Response)=>{
  console.log("reponse from api",Response)
  this.donne=Response;

},(error)=>{console.log("eroor is ",error)}
)
  }

}
