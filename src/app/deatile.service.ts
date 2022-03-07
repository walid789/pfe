import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeatileService {

  constructor( private http :HttpClient) { }
  getData(i:number){
     let ch:string ;
    ch = i.toString() 
   return this.http.get('/api/getData/'+ch);
  }
}
