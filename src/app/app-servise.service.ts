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
  getAllUser(){
    return this.http.get('/api/getAllUser/')
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
  getBestSales(){
    return this.http.get('/api/getBestSales')
  }
  getuserById(data:any){
    return this.http.post('/api/getUserById',data)
  }
  getProduit(data:any){
    return this.http.post('/api/getProduitById',data)
  }
  updateCommande(data:any){
    return this.http.put('/api/UpdateCommande',data)
  }
  DeletCommande(data:any){
    return this.http.post('/api/DeletCommande/',data)
  }
  DeletProduit(data:any){
    return this.http.post('/api/DeletProduit/',data)
  }
  UpdateStockProduit(data:any){
    return this.http.put('/api//UpdateStockProduit',data)
  }
  AddCommande(data:any){
    return this.http.post('/api//addCommande/',data)
  }
  FrogetPassword(data:any){
    return this.http.post('/api/FrogetPassword',data)
  }
}
