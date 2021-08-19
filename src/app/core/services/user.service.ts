import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://feb-api.com/users'

  constructor(private http: HttpClient) {}

  getOne(id: string): Observable<User> {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  getAll(): Observable<Object> {
    return this.http.get(this.url);
  }

  create(user: User) {
    return this.http .post<User>(this.url, user)
  }

  update(id: string, user: User) {
    return this.http.patch(`${this.url}/${id}`, user)
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }

}
