import { Component, OnInit } from '@angular/core';
import { AjouterService } from '../ajouter.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  phone:string='';
  name:string='';
  email:string='';
  password:string='';
  adresse:string='';
  user:any;
  e:any;
  code:any;
  n:any;
  constructor(private service:AjouterService) { }
  ngOnInit(): void {
   var n=Math.floor(Math.random() * (10000) + 99999)
    console.log(n);
  }
  sendverifi(){
    this.n=Math.floor(Math.random() * (10000) + 99999)
    console.log(this.n);
    this.e={
      code:this.n,
      email:this.email,
      }
      emailjs.send('service_alx5n88', 'template_nqrvcbs', this.e  , 'VNmU56cqSuKQK41Ez')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      }
      );
      
  }
  verife(){
    if(this.code==this.n){
       this.ajouter();
    }
      else{
        alert('code inccorect');
      }
  }
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
    this.sendverifi();
  }
  closePopup() {
    this.displayStyle = "none";
  }
  ajouter(){
    const now = new Date();
    this.user = 
    { name:this.name, 
     email:this.email,
     password:this.password,
     phone:this.phone,
     date:now.toLocaleDateString(),
     adresse:this.adresse
   }; 
   console.log(this.user);
   this.service.create(this.user).subscribe((Response)=>{
   console.log("user ajouter")
  },(error)=>{console.log("eroor is ",error)}

  )

  }


}
