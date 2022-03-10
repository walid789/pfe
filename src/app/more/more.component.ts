import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {
  ch:string='';
  donne:any;
  constructor(private service:CategorieService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ch = this.activatedRoute.snapshot.params['cat'];
    this.getDataFromAPI(this.ch);
  }
  getDataFromAPI(ch:string){
    this.service. getCat(ch).subscribe((Response)=>{
      console.log("reponse from api",Response)
      this.donne=Response;
      console.log(this.donne);
    },(error)=>{console.log("eroor is ",error)}
    )
      }

}
