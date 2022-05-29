import { Component, OnInit } from '@angular/core';
import { AppServiseService } from '../app-servise.service';
import {Router} from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

mail:string="";
pass:string="";
user:any;
donne:any;
valid:any;
e_mail:any;
invalid:any;
e:any;
data:any;
  constructor(private servise:AppServiseService,private router:Router) { }

  ngOnInit(): void {
    
  }
  displayStyle = "none";
  displayStyle1 = "none";

  frogetPassword(password:string){
    this.e={
    pass:password,
    email:this.e_mail,
    }
    emailjs.send('service_alx5n88', 'template_70w7yrp', this.e  , 'VNmU56cqSuKQK41Ez')
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
}
  
  openPopup() {
    this.displayStyle = "block";
  }
  openPopup1() {
    this.displayStyle1 = "block";
   this.data={
mail:this.e_mail
   }
    this.servise.FrogetPassword(this.data).subscribe((Response)=>{
      this.donne=Response;
      console.log(this.donne[0].pass_word)
      this.frogetPassword(this.donne[0].pass_word);
     },(error)=>{console.log("eroor is ",error)}
    
     )

    
  }
  closePopup() {
    this.displayStyle = "none";
  }
  closePopup1() {
    this.displayStyle1 = "none";
    
  }


verif(){
this.user={
  mail:this.mail,
  pass:this.pass
}
//console.log(this.user)
this.servise.getUser(this.user).subscribe((Response)=>{
  this.donne=Response;
  if (this.donne.length!=0){
    if(this.donne[0].mail=="admin@gmail.com" ){
      this.router.navigate(['/dashbord']);
    }
   sessionStorage.setItem("email",this.mail.toString());
   sessionStorage.setItem("id",this.donne[0].id.toString());
   this.router.navigate(['/accueil']);
  }
  else{
    this.valid=false;
    console.log("erure ")
  }
  
 },(error)=>{console.log("eroor is ",error)}

 )
}
}
