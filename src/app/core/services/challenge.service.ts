import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Challenge } from '../models/challenge.model'
import { StorageService } from './storage.service';
import { UuidService } from './uuid.service';


@Injectable({
  providedIn: 'root',
})
export class ChallengeService {

  url = 'https://feb-api.com/challenges'

  constructor(private storageService: StorageService ,private http: HttpClient, private uuid: UuidService) {}

  getOne(id: string): Observable<Challenge> {
    return this.http.get<Challenge>(`${this.url}/${id}`);
  }

  getAll(): Observable<Object> {
    return this.http.get(this.url);
  }

  create(challengeInfos: { title: string, description: string, code: string, imgData: string}) {
    const uuid = this.uuid.getId();
    const imgId = this.storageService.uploadImg(challengeInfos.imgData);

    const challenge = {
      id: uuid,
      title: challengeInfos.title,
      description: challengeInfos.description,
      code: challengeInfos.code,
      imgId,
      creatorId: "almost"
    }


    return this.http.post(this.url, challenge, {responseType: 'text'})
  }

  update(id: string, challenge: Challenge) {
    return this.http.patch(`${this.url}/${id}`, challenge)
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`)
  }

}
