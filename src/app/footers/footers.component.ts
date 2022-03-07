import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footers',
  templateUrl: './footers.component.html',
  styleUrls: ['./footers.component.css']
})
export class FootersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clickme(username:string,objet:string,message:string) {
    console.log(username,objet,message);
  }

}
