import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UuidService } from './uuid.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://feb-api.com/users'

  set user(user: User) {
    this.user = user;
  }

  get user():User {
    return this.user;
  }

  constructor(private http: HttpClient, private uuid: UuidService) {}

  getOne(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  getAll(): Observable<Object> {
    return this.http.get(this.url);
  }

  create(email: string, name: string) {
    const uuid = this.uuid.getId();
    const user = {
      id: uuid,
      email: email,
      username: name,
      challenges: [""],
    }
    this.user = user;
    return this.http.post<User>(this.url, JSON.stringify(user)).pipe(take(1))
  }

  update(id: string, user: User) {
    return this.http.patch(`${this.url}/${id}`, user)
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }

}
