import { Component, OnInit } from '@angular/core';
import { AppServiseService } from '../app-servise.service';
@Component({
  selector: 'app-tab-produit',
  templateUrl: './tab-produit.component.html',
  styleUrls: ['./tab-produit.component.css']
})
export class TabProduitComponent implements OnInit {
donne:any;
data:any;
  constructor(private service:AppServiseService) { }

  ngOnInit(): void {
    this.getDataFromAPI();
  }


  detetProduit(id:any){
    this.data={
      id:id
    }
    this.service.DeletProduit(this.data).subscribe((Response)=>{
    },(error)=>{console.log("eroor is ",error)}
    )
    this.ngOnInit();
  }


  getDataFromAPI(){
    this.service.getData().subscribe((Response)=>{
      //console.log("reponse from api",Response)
      this.donne=Response;
    
    },(error)=>{console.log("eroor is ",error)}
    )
      }
    
}
