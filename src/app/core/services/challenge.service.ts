import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from '../models/challenge.model'


@Injectable({
  providedIn: 'root',
})
export class ChallengeService {

  url = 'https://front-end-battle.herokuapp.com/challenges'

  constructor(private http: HttpClient) {}

  getChallenge(id: string) {
    
  }

  getChallenges() {
    return this.http.get(this.url);
  }

  createChallenge(challenge: Challenge): Observable<Challenge> {
    return this.http
      .post<Challenge>(this.url, challenge)

  }

  updateChallenge() {}

  deleteChallenge(id: string) {}

}
