import { Injectable } from '@angular/core';

import html2canvas from 'html2canvas';


@Injectable({
  providedIn: 'root'
})
export class IframeToImgService {
  _imgDataURL: string;
  set imgDataURL(url: string) { this._imgDataURL = url }
  get imgDataURL() { return this._imgDataURL }

  constructor() { }

    // Create a canvas from the iframe and convert it to a blob.
    convertToImg(body: HTMLObjectElement) {
      return html2canvas(body, { useCORS: true} ).then(canvas => {
        this.imgDataURL = canvas.toDataURL();
        return this.imgDataURL;
      });
    }

}
