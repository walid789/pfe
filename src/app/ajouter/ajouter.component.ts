import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AjouterService } from '../ajouter.service';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
     image:string="";
     image1:string="";
     image2:string="";
     image3:string="";
     image4:string="";

  onselect(e:any,ch:string){
       if (e.target.files){
         var reader=new FileReader();
         reader.readAsDataURL(e.target.files[0])
         reader.onload=(event:any)=>{
           if (ch=="image"){
           this.image=event.target.result;
           }
           if (ch=="image1"){
            this.image1=event.target.result;
            }
            if (ch=="image2"){
              this.image2=event.target.result;
              }
              if (ch=="image3"){
                this.image3=event.target.result;
                }
                if (ch=="image4"){
                  this.image4=event.target.result;
                  }
           
         }
       }
  }

   


  @ViewChild('fileInput', { static: false })
  fileInput!: ElementRef;
  @ViewChild('fileInput1', { static: false })
  fileInput1!: ElementRef;
  @ViewChild('fileInput2', { static: false })
  fileInput2!: ElementRef;
  @ViewChild('fileInput3', { static: false })
  fileInput3!: ElementRef;
  @ViewChild('fileInput4', { static: false })
  fileInput4!: ElementRef;

  url: string='';
  url1: string='';
  url2: string='';
  url3: string='';
  url4: string='';

   nom:string='';
  mat:string='';
  dim:string='';
  name:string='';
  prix:number=0;
  selcted:any;
  produit:any;
  quanite:number=1;


  constructor(private service: AjouterService) { }
  onChange(ch:any){
    this.selcted=ch.value;
  }

  ajouterProduit(){
   this.produit={
    quanite:this.quanite,
     nom:this.nom,
     mat:this.mat,
    dim:this.dim,
    prix:this.prix,
    selcted:this.selcted,
    url:this.url,
    url1:this.url1,
    url2:this.url2,
    url3:this.url3,
    url4:this.url4,
  }
  console.log(this.produit);
  this.service.ajouterProduit(this.produit).subscribe((Response)=>{
 
 },(error)=>{console.log("eroor is ",error)}

 )
 alert("produit ajouter")
 
  }




  ngOnInit(): void {
    
  }

  Concat(imageblob:any){
    const i:number=imageblob.type.indexOf('/');
    var type = imageblob.type.substr(i+1, 10); 
    var i1:number=imageblob.name.indexOf('.');
    var nom = imageblob.name.slice(0,i1); 
    var tab=[type,nom]
    return tab;
   }

  fn(ch:any){
    var imageblob:any;
    if (ch=="fileInput"){
       imageblob=this.fileInput.nativeElement.files[0];
       var tab= this.Concat(imageblob);
       console.log(tab[0])
       this.url="\\assets\\image\\"+tab[1]+'.'+tab[0];
    }
    if(ch=="fileInput1"){
      imageblob=this.fileInput1.nativeElement.files[0];
      var tab= this.Concat(imageblob);
      this.url1="\\assets\\image\\"+tab[1]+'.'+tab[0];
    }
    if(ch=="fileInput2"){
      imageblob=this.fileInput2.nativeElement.files[0];
      var tab= this.Concat(imageblob);
      this.url2="\\assets\\image\\"+tab[1]+'.'+tab[0];
    }
    if(ch=="fileInput3"){
      imageblob=this.fileInput3.nativeElement.files[0];
      var tab= this.Concat(imageblob);
      this.url3="\\assets\\image\\"+tab[1]+'.'+tab[0];
    }
    if(ch=="fileInput4"){
      imageblob=this.fileInput4.nativeElement.files[0];
      var tab= this.Concat(imageblob);
      this.url4="\\assets\\image\\"+tab[1]+'.'+tab[0];
    }

    const file =new FormData();
    file.set('file',imageblob);
    this.service.ajouterimage(file).subscribe((Response)=>{
      console.log(Response);
     },(error)=>{console.log("eroor is ",error)}
   
     )
    }
 
}
