import { Component, OnInit } from '@angular/core';
import { DeatileService } from '../deatile.service';
import { ActivatedRoute } from '@angular/router';

  
@Component({
  selector: 'app-detaile',
  templateUrl: './detaile.component.html',
  styleUrls: ['./detaile.component.css']
})
export class DetaileComponent implements OnInit {
  donne:any;
  
  id:number=0;
  q:number=1;
  ch:string='';
 

  constructor(private service:DeatileService,private activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getDataFromAPI(this.id);
  }
 
  getDataFromAPI(id:number){
    this.service.getData(id).subscribe((Response)=>{
      console.log("reponse from api",Response)
      this.donne=Response;
      this.ch=this.donne[0].image;
    },(error)=>{console.log("eroor is ",error)}
    )
      }
      changer(url:string){
      this.ch=url;
      console.log(this.ch);
      }

}
