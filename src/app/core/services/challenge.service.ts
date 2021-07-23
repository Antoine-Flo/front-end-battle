import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private http: HttpClient) { }

  // Launch server: json-server --watch ./mock/db.json
  // getChallenges() {
  //   return this.http.get('http://localhost:3000/challenges')
  // }
}
