import { Injectable } from '@angular/core';

import html2canvas from 'html2canvas';
import app from 'firebase';
import { UuidService } from './uuid.service';
@Injectable({
  providedIn: 'root'
})
export class IframeToImgService {
  _imgDataURL: string;
  set imgDataURL(url: string) { this._imgDataURL = url }
  get imgDataURL() { return this._imgDataURL }

  constructor(private uuid: UuidService) { }

    // Create a canvas from the iframe and convert it to a blob.
    convertToImg(body: HTMLObjectElement) {
      return html2canvas(body).then(canvas => {
        this.imgDataURL = canvas.toDataURL();
        return this.imgDataURL;
           
        // canvas.toBlob(blob => {     
        //   this.uploadBlob(blob)
        // });
      });
    }
  
    // Send the preview image to firestore
    uploadBlob(file) {
      const ref = app.storage().ref().child(this.uuid.getId());
      ref.put(file).then(() => console.log('Uploaded a blob or file!'));
    }

    save() {
      const ref = app.storage().ref().child(this.uuid.getId());
      ref.putString(this.imgDataURL, 'data_url').then(() => console.log('Uploaded a data_url string!'));
    }
}
