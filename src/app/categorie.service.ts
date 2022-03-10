import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor( private http :HttpClient) { }
  getCat(cat:string){
   
  return this.http.get('/api/data/'+cat);
 }
}
