import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjouterService {

  constructor(private http: HttpClient) { }
  create(data:any) {
    console.log(data);
    return this.http.post('/api/addUser/', data);
  }
}
