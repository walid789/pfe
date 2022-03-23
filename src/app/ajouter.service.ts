import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AjouterService {

  constructor(private http: HttpClient) { }

  ajouterPanier(data:any) :Observable<any> {
    return this.http.post('/api/addPanier/', data);
    }

  create(data:any) :Observable<any>{
  
    return this.http.post('/api/addUser/', data);
  }



 
}
