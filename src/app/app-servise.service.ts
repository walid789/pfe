import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppServiseService {

  constructor( private http :HttpClient) { }
  getData(){
   return this.http.get('/api/getData')
  }
  getPanier(data:any){
    return this.http.post('/api/getPanier/',data)
  }
  getUser(data:any){
    return this.http.post('/api/getUser/',data)
  }
  DeletPanier(data:any){
    return this.http.post('/api/DeletPanier/',data)
  }
  modifierPanier(data:any){
    return this.http.put('/api/UpdateProduit/',data)
  }
  getCommande(){
    return this.http.get('/api/getCommande')
  }
  getuserById(data:any){
    return this.http.post('/api/getUserById',data)
  }
  getProduit(data:any){
    return this.http.post('/api/getProduitById',data)
  }
}
