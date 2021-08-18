import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import app from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { SnackBarService } from '../core/services/snack-bar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject('');

  constructor(private auth: AngularFireAuth, private router: Router, private snackBar: SnackBarService) {}

  async signinGoogle() {
    const provider = new app.auth.GoogleAuthProvider();
    const credentials = await this.auth.signInWithPopup(provider);
    this.router.navigate(['home']);
    this.updateUser(credentials.user);
  }

  async signinGitHub() {
    const provider = new app.auth.GithubAuthProvider();
    const credentials = await this.auth.signInWithPopup(provider);
    this.router.navigate(['home']);
    this.updateUser(credentials.user);
  }


  signUpWithEmailPassword(email: string, password: string) {
    return app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
      });
  }

  signInWithEmailPassword(email: string, password: string) {
    return app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
      });
  }

  logout() {
    this.auth.signOut().then(() => {
      this.snackBar.showSuccess('Vous êtes déconnecté.');
      this.user$.next('');
    });

    return this.router.navigate(['/']);
  }

  private updateUser(userData: any) {
    this.user$.next(userData);
  }
}
