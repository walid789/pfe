import { Component, OnInit } from '@angular/core';
import { AppServiseService } from '../app-servise.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

mail:string="";
pass:string="";
user:any;
donne:any
  constructor(private servise:AppServiseService,private router:Router) { }

  ngOnInit(): void {
    
  }


verif(){
this.user={
  mail:this.mail,
  pass:this.pass
}
console.log(this.user)
this.servise.getUser(this.user).subscribe((Response)=>{
 
  this.donne=Response;
  if (this.donne.length!=0){
    if(this.donne[0].mail=="admin@gmail.com" ){
      this.router.navigate(['/dashbord']);
  
    }
   sessionStorage.setItem("email",this.mail.toString());
   sessionStorage.setItem("id",this.donne[0].id.toString());
   /*this.router.navigate(['/accueil']);*/
  }
  else{
    console.log("erure ")
  }
  
 },(error)=>{console.log("eroor is ",error)}

 )
}
}
