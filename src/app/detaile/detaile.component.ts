import { Component, OnInit } from '@angular/core';
import { DeatileService } from '../deatile.service';
import { ActivatedRoute } from '@angular/router';
import { AjouterService } from '../ajouter.service';
  
@Component({
  selector: 'app-detaile',
  templateUrl: './detaile.component.html',
  styleUrls: ['./detaile.component.css']
})
export class DetaileComponent implements OnInit {
  donne:any;
  id_user:number=0;
  id:number=0;
  q:number=1;
  ch:string='';
  panier:any;
  nom:string="";
  prix:number=0;
  image:string='';
  dim:string="";
  mat:string="";
  quanite:number=0;
  
  constructor(private service:DeatileService,private activatedRoute:ActivatedRoute,private service1:AjouterService) {

   }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getDataFromAPI(this.id);
  }
 
  getDataFromAPI(id:number){
    this.service.getData(id).subscribe((Response)=>{
      console.log("reponse from api",Response)
      this.donne=Response;
   
      this.image=this.donne[0].image;
      this.ch=this.donne[0].image;
      this.nom=this.donne[0].nom;
      this.prix=this.donne[0].prix;
      this.dim=this.donne[0].dim;
      this.mat=this.donne[0].matriel;
      this.id_user=Number(sessionStorage.getItem("id"));
      console.log('message'+this.id_user);
    },(error)=>{console.log("eroor is ",error)}
    )
      }
      changer(url:string){
      this.ch=url;
      console.log(this.ch);
      }
      ajouterPanier(data:any){
        this.panier = 
        { nom:this.nom, 
          id_produit:this.donne[0].id,
         prix:this.prix,
         image:this.image,
         dim:this.dim,
         mat:this.mat,
         quanite:this.q,
         id_user:this.id_user,
       };
       console.log(this.panier) 
        this.service1.ajouterPanier(this.panier).subscribe((Response)=>{
          console.log("panier ajouter")
         },(error)=>{console.log("eroor is ",error)}
       
         )
         console.log(this.donne+'hhh');
      }

}
