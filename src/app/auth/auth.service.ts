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
