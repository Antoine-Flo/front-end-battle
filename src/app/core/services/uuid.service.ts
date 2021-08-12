import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UuidService {
  myId = uuid.v4();

  constructor() { }

  getId() {
    return uuid.v4();
  }
}
