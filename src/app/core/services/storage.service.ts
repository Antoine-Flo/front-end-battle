import { Injectable } from '@angular/core';
import app from 'firebase';
import { from } from 'rxjs';
import { UuidService } from './uuid.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private uuid: UuidService) {}

  downloadViaUrl(imgName: string) {
    return from(app.storage().ref().child(imgName).getDownloadURL());
  }

  
  uploadImg(dataUrl: string): string {
    const imgId = this.uuid.getId()
    const ref = app.storage().ref().child(imgId);
    ref.putString(dataUrl, 'data_url').then(() => console.log('Uploaded a data_url string!'));
    return imgId;
  }
}
