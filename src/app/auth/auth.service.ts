import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { EMPTY, Observable, of, throwError } from 'rxjs';

import app from 'firebase';

import { SnackBarService } from '../core/services/snack-bar.service';
import { UserService } from '../core/services/user.service';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private userService: UserService,
    private auth: AngularFireAuth,
    private router: Router,
    private snackBar: SnackBarService
  ) {}

  getFirebaseCurrentUser(): Observable<any> {
    const user = app.auth().currentUser;

    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      return of(user);
    } else {
      throwError('No user is signed in');
    }

    return EMPTY;
  }

  getIdToken() {
    return this.getFirebaseCurrentUser().pipe(
      tap((user) => of(user.getIdToken())),
      catchError((err) => of(err))
    );
  }

  getUserEmail() {
    return app.auth().currentUser.email;
  }

  async signinGoogle() {
    const provider = new app.auth.GoogleAuthProvider();
    this.signInWithProvider(provider);
  }

  async signinGitHub() {
    const provider = new app.auth.GithubAuthProvider();
    this.signInWithProvider(provider);
  }

  signUpWithEmailPassword(email: string, password: string) {
    return app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {});
  }

  signInWithEmailPassword(email: string, password: string) {
    return app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {});
  }

  logout() {
    this.auth.signOut().then(() => {
      this.snackBar.showSuccess('Vous êtes déconnecté.');
    });
    return this.router.navigate(['/']);
  }

  private async signInWithProvider(provider) {

    return this.auth.signInWithPopup(provider).then((cred) => {
      this.snackBar.showSuccess('Connexion réussie');
      this.router.navigate(['home']);
      const { email, name } = <{ email: string; name: string }>( cred.additionalUserInfo.profile );

      if (cred.additionalUserInfo.isNewUser) { this.userService.create(email, name).subscribe()}
      
      this.userService.getUserId(email).subscribe(x => console.log(x))
    });
  }
}
