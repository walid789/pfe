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
  i:number=0;
  debut:number=0;
fin:number=5;
dis:boolean=false;
dis1:boolean=false;

  constructor(private servise:AppServiseService ) { }
  donne:any;
  data:any;
  data1:any;
  data2:any;
  n:number=0;
 tab1:any=[];
 tab2:any=[];
 tab3:any=[];
 

 UpdatePayment(payment:string,id:number,id_produit:any,stock:any){
   this.data={
     id:id,
     Payment:payment
   }
  this.servise.updateCommande(this.data).subscribe((Response)=>{
  } ,(error)=>{console.log("eroor is ",error)}
  )
 
  if (payment=='Success'){
    this.data1={
      id:id_produit,
      stock:stock
    }
    console.log(stock)
    this.servise.UpdateStockProduit(this.data).subscribe((Response)=>{
    } ,(error)=>{console.log("eroor is ",error)}               
    )
  }
 // this.ngOnInit();         
 window.location.reload()
 } 


 deletCommande(id:any){
  this.data={
    id:id
  }
 this.servise.DeletCommande(this.data).subscribe((Response)=>{
   
 } ,(error)=>{console.log("eroor is ",error)}
 
 )

 window.location.reload()
   
 }
  
  ngOnInit(): void {
      this.getDataFromAPI();
     
  }




  concat1(data:any){
    var tab=[]
         tab.push(data);
        return tab;
  }
  remplireTab_Commande_user(debut:number,fin:number){
    for(let i=debut;i<fin;i++){
      this.data={
         id:this.donne[i].id_user,
         id_produit:this.donne[i].id_produit
       }
       this.servise.getuserById(this.data).subscribe((Response1)=>{
       this.tab1.push( this.concat1(Response1))
     })
     this.servise.getProduit(this.data).subscribe((Response2)=>{

        this.tab2.push( this.concat1(Response2))

    })

       }
     
  }


  getDataFromAPI(){
    this.servise.getCommande().subscribe((Response)=>{
      this.donne=Response;
      this.remplireTab_Commande_user(this.debut,this.fin)
      if (this.debut==5){
        this.dis1=true
      }
    }
    ,(error)=>{console.log("eroor is ",error)}
    )
}
preview(){
  this.debut=this.debut-5;
  this.fin=this.fin-5;
  this.tab1=[]
  this.tab2=[]
  this.remplireTab_Commande_user(this.debut,this.fin)
}
next(){
 
  this.debut=this.debut+5;
  this.fin=this.fin+5;
  if (this.tab1.length%2==1){
this.dis=true; 
 }
  this.tab1=[]
  this.tab2=[]
  this.remplireTab_Commande_user(this.debut,this.fin)
  
}

}
