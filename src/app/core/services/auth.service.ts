import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import app from 'firebase'


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private auth: AngularFireAuth, private router: Router) { }

  async signinGoogle() {
    const provider = new app.auth.GoogleAuthProvider();
    const credentials = await this.auth.signInWithPopup(provider);
    return credentials.user
  }

  logout() {
    this.auth.signOut().then(() => {
      console.log("Signed Out")
    });
    
    return this.router.navigate(['/']);

  }

}
