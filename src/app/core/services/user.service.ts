import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { UuidService } from './uuid.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.api.users
  
  public get userId() : string {
    return localStorage.getItem('userId');
  }
  
  public set userId(id : string) {
    localStorage.setItem('userId', id);
  }
  
  // For documentation on the api : https://feb-api.com/api


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

  getUserId(email: string): Observable<string> {
    return this.http.get<{id: string}>(`${this.url}/${email}/id`).pipe(map(res => res.id))
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
    this.userId = uuid;
    return this.http.post(this.url, user, {responseType: 'text'})
  }

  /////////////////////
  //      PATCH      //
  /////////////////////

  update(id: string, user: User) {
    return this.http.patch(`${this.url}/${id}`, user)
  }

  addChallenge(userId: string , userChallenge: {}) {
   
    
    return this.http.patch(`${this.url}/${userId}/challenge`, userChallenge, {
      params: new HttpParams().set('action', 'add')
    })
  }

  deleteChallenge(userId: string , challenge: {}) {
    return this.http.patch(`${this.url}/${userId}/challenge`, challenge)
  }

  /////////////////////
  //      DELETE     //
  /////////////////////

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }

}
