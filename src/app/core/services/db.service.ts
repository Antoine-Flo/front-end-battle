import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }

  testBackend() {
    this.http.get('https://front-end-battle.herokuapp.com/', {responseType: 'text'}).subscribe(x => console.log(x))
  }
}
