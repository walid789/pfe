import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  @Input()dat:any;
  constructor() { }

  ngOnInit(): void {
  }

}
