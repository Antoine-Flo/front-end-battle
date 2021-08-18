import { Injectable } from '@angular/core';
import app from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}


  downloadViaUrl(imgName: string) {
    const storageRef = app.storage().ref();

    storageRef
      .child(imgName)
      .getDownloadURL()
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
        console.log(url);
        
        // This can be downloaded directly:
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          var blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
        // Or inserted into an <img> element
        var img = document.getElementById('myimg');
        img.setAttribute('src', url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }
}
