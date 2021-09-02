import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(
    private storageService: StorageService,
    private http: HttpClient,
    private uuid: UuidService,
    private userService: UserService,
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
    const userId = this.userService.userId;
    const creatorId = this.userService.userId;
    const challenge = {
      id: uuid,
      title: challengeInfos.title,
      description: challengeInfos.description,
      code: challengeInfos.code,
      imgId,
      creatorId,
    };

    const userChallenge = {
      id: uuid,
      title: challengeInfos.title,
    }
    this.userService.addChallenge(userId, userChallenge).subscribe();
    return this.http.post(this.url, challenge, { responseType: 'text' });
  }

  /////////////////////
  //      PATCH      //
  /////////////////////

  update(id: string, challengeInfos: {
    title: string;
    description: string;
    code: string;
    imgData: string;
  }) {
    return this.http.patch(`${this.url}/${id}`, challengeInfos);
  }

  /////////////////////
  //      DELETE     //
  /////////////////////

  delete(id: string) {
    const userId = this.userService.userId;
    this.userService.deleteChallenge(userId, { id }).subscribe()
    return this.http.delete(`${this.url}/${id}`);
  }
}
