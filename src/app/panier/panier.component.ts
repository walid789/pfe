import { Component, OnInit } from '@angular/core';
import { AppServiseService } from '../app-servise.service';
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  donne:any;
  nbtotal:number=0;
  nbcommande:number=0;
  id:number=0;
  data:any;
  delete:any;
  constructor(private service:AppServiseService ) { }

  ngOnInit(): void {
    this.getDataFromAPI();
  }
  
  getDataFromAPI(){
     this.id=Number(sessionStorage.getItem("id"));
     this.data={
      id:this.id
    }
    this.service.getPanier(this.data).subscribe((Response)=>{
      console.log("reponse from api",Response)
      this.donne=Response;
    
      for (let entry of this.donne) {
        this.nbcommande++;
        this.nbtotal=this.nbtotal+entry.prix;
    }
    },(error)=>{console.log("eroor is ",error)}
    )
   
      }

supp(){
  console.log("supp");
    this.delete={
      id:this.donne[0].id,
      id_user:Number(sessionStorage.getItem("id")),
    }
    this.service.DeletPanier(this.delete).subscribe((Response)=>{
      console.log("reponse from api",Response)
    },(error)=>{console.log("eroor is ",error)}
    )
    location.reload();  
}
}
