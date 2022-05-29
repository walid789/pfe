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
tab_produit:any=[]
debut:number=0;
fin:number=5;
pas:number=5;
style:boolean=false;
dis:any;
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
      this.donne=Response;
   
      for (let i=this.debut;i<this.fin;i++){
        this.tab_produit.push(this.donne[i])
      }
    },(error)=>{console.log("eroor is ",error)}
    )
      }
      preview(){

        this.debut=this.debut-5;
        this.fin=this.fin-5;
        this.tab_produit=[];
        for (let i=this.debut;i<this.fin;i++){
            if (this.donne[i].id>0){
          this.tab_produit.push(this.donne[i])}
          else{
            this.dis="disabled";
          }
        }
      }
      next(){
        
        this.debut=this.debut+5;
        this.fin=this.fin+5;
        this.tab_produit=[];
        for (let i=this.debut;i<this.fin;i++){
            if (this.donne[i].id>0){
          this.tab_produit.push(this.donne[i])}
          else{
            this.dis="disabled";
          }
        }
        
        
      }
    
}
