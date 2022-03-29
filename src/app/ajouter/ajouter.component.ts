import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AjouterService } from '../ajouter.service';


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
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


  constructor(private service: AjouterService) { }
  onChange(ch:any){
    this.selcted=ch.value;
  }

  ajouterProduit(){
   this.produit={
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


fn(ch:any){
  var imageblob:any;
  if (ch=="fileInput"){
     imageblob=this.fileInput.nativeElement.files[0];
  }
  if(ch=="fileInput1"){
    imageblob=this.fileInput1.nativeElement.files[0];
  }
  if(ch=="fileInput2"){
    imageblob=this.fileInput2.nativeElement.files[0];
  }
  if(ch=="fileInput3"){
    imageblob=this.fileInput3.nativeElement.files[0];
  }
  if(ch=="fileInput4"){
    imageblob=this.fileInput4.nativeElement.files[0];
  }
 
  const i:number=imageblob.type.indexOf('/');

  var sliced = imageblob.type.substr(i+1, 10); 

  console.log(imageblob.type);
  var i1:number=imageblob.name.indexOf('.');

  var newstr = imageblob.name.slice(0,i1); 
  if(ch=="fileInput"){
    this.url="\\assets\\image\\"+newstr+'.'+sliced;
  }
  if(ch=="fileInput1"){
    this.url1="\\assets\\image\\"+newstr+'.'+sliced;
  }
  if(ch=="fileInput2"){
    this.url2="\\assets\\image\\"+newstr+'.'+sliced;
  }
  if(ch=="fileInput3"){
    this.url3="\\assets\\image\\"+newstr+'.'+sliced;
  }
  if(ch=="fileInput4"){
    this.url4="\\assets\\image\\"+newstr+'.'+sliced;
  }
  }
 
  ngOnInit(): void {
    
  }
  onfile(){
    const imageblob=this.fileInput.nativeElement.files[0];
    const file =new FormData();
    file.set('file',imageblob);

    
    this.service.ajouterimage(file).subscribe((Response)=>{
      console.log(Response);
     },(error)=>{console.log("eroor is ",error)}
   
     )
  }
 

  onfile1(){
    const imageblob=this.fileInput1.nativeElement.files[0];
    const file =new FormData();
    file.set('file',imageblob);

    
    this.service.ajouterimage(file).subscribe((Response)=>{
      console.log(Response);
     },(error)=>{console.log("eroor is ",error)}
   
     )
  }
  onfile2(){
    const imageblob=this.fileInput2.nativeElement.files[0];
    const file =new FormData();
    file.set('file',imageblob);
    const i:number=imageblob.type.indexOf('/');

    var sliced = imageblob.type.substr(i+1, 10); 
  
    console.log(imageblob.type);
    var i1:number=imageblob.name.indexOf('.');

    var newstr = imageblob.name.slice(0,i1); 

    this.url2="\\assets\\image\\"+newstr+'.'+sliced;
     
    console.log(this.url2);
    
    this.service.ajouterimage(file).subscribe((Response)=>{
      console.log(Response);
     },(error)=>{console.log("eroor is ",error)}
   
     )
  }
  onfile3(){
    const imageblob=this.fileInput3.nativeElement.files[0];
    const file =new FormData();
    file.set('file',imageblob);
    const i:number=imageblob.type.indexOf('/');

    var sliced = imageblob.type.substr(i+1, 10); 
  
    console.log(imageblob.type);
    var i1:number=imageblob.name.indexOf('.');

    var newstr = imageblob.name.slice(0,i1); 

    this.url3="\\assets\\image\\"+newstr+'.'+sliced;
     
    console.log(this.url3);
    
    this.service.ajouterimage(file).subscribe((Response)=>{
      console.log(Response);
     },(error)=>{console.log("eroor is ",error)}
   
     )
  }

  onfile4(){
    const imageblob=this.fileInput4.nativeElement.files[0];
    const file =new FormData();
    file.set('file',imageblob);
    const i:number=imageblob.type.indexOf('/');

    var sliced = imageblob.type.substr(i+1, 10); 
  
    console.log(imageblob.type);
    var i1:number=imageblob.name.indexOf('.');

    var newstr = imageblob.name.slice(0,i1); 

    this.url4="\\assets\\image\\"+newstr+'.'+sliced;
     
    console.log(this.url4);
    
    this.service.ajouterimage(file).subscribe((Response)=>{
      console.log(Response);
     },(error)=>{console.log("eroor is ",error)}
   
     )
  }
}
