import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.css']
})
export class ExempleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sendEmail(e:Event){
    /*this.e={
    pass:"walid123",
    email:this.e_mail
    }*/
    emailjs.sendForm('service_alx5n88', 'template_70w7yrp',e.target as HTMLFormElement  , 'VNmU56cqSuKQK41Ez')
    .then((result: EmailJSResponseStatus) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
}

}
