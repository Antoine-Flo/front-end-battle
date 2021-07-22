import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  // optionRequete = {
  //   headers: new HttpHeaders({ 
  //     'Access-Control-Allow-Origin':'*',

  //   })
  // };

  constructor(private http: HttpClient) { }

  testBackend() {
    this.http.get('http://localhost:3000/', {responseType: 'text'}).subscribe(x => console.log(x))
  }
}
