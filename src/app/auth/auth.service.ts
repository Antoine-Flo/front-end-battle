import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from './user.model'
import app from 'firebase'
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$ = new BehaviorSubject('');

  constructor(private auth: AngularFireAuth, private router: Router) {}

  async signinGoogle() {
    const provider = new app.auth.GoogleAuthProvider();
    const credentials = await this.auth.signInWithPopup(provider);
    this.updateUser(credentials.user);
  }

  async signinGitHub() {
    const provider = new app.auth.GithubAuthProvider()
    const credentials = await this.auth.signInWithPopup(provider);
    this.updateUser(credentials.user);
  }

  async signUpWithEmailPassword(email: string, password: string) {

    // [START auth_signup_password]
    app.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Signed-in");
        
        var user = userCredential.user;
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    // [END auth_signup_password]
  }

  logout() {
    this.auth.signOut().then(() => {
      console.log("Signed Out");
      this.user$.next('');
    });
    
    return this.router.navigate(['/']);
  }

  private updateUser(userData : any) {
    this.user$.next(userData);
  }
}
