import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UuidService } from './uuid.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  _userId: string;
  
  public get userId() : string {
    return this._userId;
  }
  
  
  public set userId(id : string) {
    this._userId = id;
  }
  

  // For documentation on the api : https://feb-api.com/api

  url = 'https://feb-api.com/users'

  constructor(private http: HttpClient, private uuid: UuidService) {}

  //////////////////
  //     GET      //
  //////////////////

  getAll(): Observable<Object> {
    return this.http.get(this.url);
  }

  getOne(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  getUserId(email: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${btoa(email)}/id`);
  }

  ////////////////////
  //      POST      //
  ////////////////////

  create(email: string, name: string) {
    const uuid = this.uuid.getId();
    const user = {
      id: uuid,
      email: email,
      username: name,
      challenges: [],
    }
    return this.http.post(this.url, user, {responseType: 'text'})
  }

  /////////////////////
  //      PATCH      //
  /////////////////////

  update(id: string, user: User) {
    return this.http.patch(`${this.url}/${id}`, user)
  }

  addChallenge(userMail: string , userChallenge: {}) {
    return this.http.patch(`${this.url}/${userMail}/challenge`, userChallenge)
  }

  deleteChallenge(userMail: string , challenge: {}) {
    return this.http.patch(`${this.url}/${userMail}/challenge`, challenge)
  }

  /////////////////////
  //      DELETE     //
  /////////////////////

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }

}
