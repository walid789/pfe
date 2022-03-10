import { Component, OnInit } from '@angular/core';
import { AjouterService } from '../ajouter.service';

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
  user:any;
  constructor(private service:AjouterService) { }

  ngOnInit(): void {
   console.log("heloo");
  }
  ajouter(){
    this.user = 
    { name:this.name, 
     email:this.email,
     password:this.password,
     phone:this.phone,
   }; 
   console.log(this.user);
   this.service.create(this.user).subscribe((Response)=>{
   console.log("user ajouter")
  },(error)=>{console.log("eroor is ",error)}

  )

  }


}
