import { Injectable } from '@angular/core';
import app from 'firebase';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  downloadViaUrl(imgName: string) {
    return from(app.storage().ref().child(imgName).getDownloadURL());
  }
}
