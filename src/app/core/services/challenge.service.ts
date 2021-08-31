import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';
import { Challenge } from '../models/challenge.model';
import { StorageService } from './storage.service';
import { UserService } from './user.service';
import { UuidService } from './uuid.service';

@Injectable({
  providedIn: 'root',
})
export class ChallengeService {
  // For documentation on the api : https://feb-api.com/api

  url = environment.api.challenges;
  // url = 'https://feb-api.com/challenges';

  constructor(
    private storageService: StorageService,
    private http: HttpClient,
    private uuid: UuidService,
    private userService: UserService,
    private authService: AuthService
  ) {}


  //////////////////
  //     GET      //
  //////////////////

  getOne(id: string): Observable<Challenge> {
    return this.http.get<Challenge>(`${this.url}/${id}`);
  }

  getAll(): Observable<Object> {
    return this.http.get(this.url);
  }

  ////////////////////
  //      POST      //
  ////////////////////

  create(challengeInfos: {
    title: string;
    description: string;
    code: string;
    imgData: string;
  }) {
    const uuid = this.uuid.getId();
    const imgId = this.storageService.uploadImg(challengeInfos.imgData);
    const userEmail = this.authService.getUserEmail();
    this.userService.getOne(userEmail);
    const challenge = {
      id: uuid,
      title: challengeInfos.title,
      description: challengeInfos.description,
      code: challengeInfos.code,
      imgId,
      creatorId: 'Antoine',
    };

    const userChallenge = {
      id: uuid,
      title: challengeInfos.title,
    }
    this.userService.addChallenge(userEmail, userChallenge).subscribe();
    return this.http.post(this.url, challenge, { responseType: 'text' });
  }

  /////////////////////
  //      PATCH      //
  /////////////////////

  update(id: string, challenge: Challenge) {
    return this.http.patch(`${this.url}/${id}`, challenge);
  }

  /////////////////////
  //      DELETE     //
  /////////////////////

  delete(id: string) {
    const userEmail = this.authService.getUserEmail()
    this.userService.deleteChallenge(userEmail, { id }).subscribe()
    return this.http.delete(`${this.url}/${id}`);
  }
}
