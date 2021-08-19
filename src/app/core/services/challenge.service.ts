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

  getOne(id: string): Observable<Challenge> {
    return this.http.get<Challenge>(`${this.url}/${id}`);
  }

  getAll(): Observable<Object> {
    return this.http.get(this.url);
  }

  create(challenge: Challenge) {
    return this.http.post<Challenge>(this.url, challenge)
  }

  update(id: string, challenge: Challenge) {
    return this.http.patch(`${this.url}/${id}`, challenge)
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }

}
