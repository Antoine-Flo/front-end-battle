import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Challenge } from '../models/challenge.model'


@Injectable({
  providedIn: 'root',
})
export class ChallengeService {

  url = 'https://feb-api.com/challenges'

  constructor(private http: HttpClient) {}

  getChallenge(id: string): Observable<Challenge> {
    return this.http.get<Challenge>(`${this.url}/${id}`)
  }

  getChallenges(): Observable<Object> {
    return this.http.get(this.url);
  }

  createChallenge(challenge: Challenge) {
    return this.http
      .post<Challenge>(this.url, challenge)
  }

  updateChallenge() {}

  deleteChallenge(id: string) {
    return this.http
    .delete(`${this.url}/${id}`)
  }

}
