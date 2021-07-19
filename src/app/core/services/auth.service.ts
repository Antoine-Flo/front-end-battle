import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import app from 'firebase'


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(public afAuth: AngularFireAuth) { }

  async signinGoogle() {

    const provider = new app.auth.GoogleAuthProvider();
    const credentials = await this.afAuth.signInWithPopup(provider);
    
  }

}
