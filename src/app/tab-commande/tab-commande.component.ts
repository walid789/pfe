import { Component, OnInit } from '@angular/core';
import { AppServiseService } from '../app-servise.service';
@Component({
  selector: 'app-tab-commande',
  templateUrl: './tab-commande.component.html',
  styleUrls: ['./tab-commande.component.css']
})
export class TabCommandeComponent implements OnInit {
  id_user:any;
  id_produit:any;
  tab_user:any;
  tab_produit:any;

  constructor(private servise:AppServiseService ) { }
  donne:any;
  data:any;
  data1:any;
  data2:any;
  n:number=0;
 tab1:any=[];
 tab2:any=[];
 tab3:any=[];
 
  
  ngOnInit(): void {
    this.getDataFromAPI();
  }


  concat1(data:any){
    var tab=[]
         tab.push(data);
        return tab;
  }

  getDataFromAPI(){

    this.servise.getCommande().subscribe((Response)=>{
      this.donne=Response;
      for(let i=0;i<this.donne.length;i++){
        this.data={
           id:this.donne[i].id_user,
           id_produit:this.donne[i].id_produit
         }
         console.log(this.donne[0].quantite)
         this.servise.getuserById(this.data).subscribe((Response1)=>{
         this.tab1.push( this.concat1(Response1))
       })
       this.servise.getProduit(this.data).subscribe((Response2)=>{
        this.tab2.push( this.concat1(Response2))
      })

         }
    }
    ,(error)=>{console.log("eroor is ",error)}
    )
   //console.log(this.tab3)
  this.tab3.push(this.tab1);
   this.tab3.push(this.tab2);
    console.log(this.tab1);
  
}


}
