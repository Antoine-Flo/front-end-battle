import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { EMPTY, Observable, of, throwError } from 'rxjs';

import app from 'firebase';

import { SnackBarService } from '../core/services/snack-bar.service';
import { UserService } from '../core/services/user.service';
import { catchError, mergeMap } from 'rxjs/operators';

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
      this.logout();
      throwError('No user is signed in');
    }
    return EMPTY;
  }


  async signinGoogle() {
    const provider = new app.auth.GoogleAuthProvider();
    this.signInWithProvider(provider);
  }

  async signinGitHub() {
    const provider = new app.auth.GithubAuthProvider();
    this.signInWithProvider(provider);
  }

  async logInWithEmailPassword(email: string, password: string) {
    return app.auth().signInWithEmailAndPassword(email, password).then(() => {
      this.setUserId(email)
      this.snackBar.showSuccess('Connexion réussie');
      this.router.navigate(['home']);
    })
    .catch((err) => {
      this.snackBar.showError(err.message, err.code);
    });;
  }

  async createAccountWithEmailPassword(
    userName: string,
    email: string,
    password: string
  ) {
    return app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        this.setUserId(email)
        if (userCredentials.additionalUserInfo.isNewUser) {
          this.userService.create(email, userName).subscribe();
        }
      });
  }

  logout() {
    this.auth.signOut().then(() => {
      this.snackBar.showSuccess('Vous êtes déconnecté.');
    });
    localStorage.setItem('userId', '');
    return this.router.navigate(['/']);
  }

  getIdToken() {
    return this.getFirebaseCurrentUser().pipe(
      mergeMap((user) => user.getIdToken()),
      catchError((err) => of(err))
    );
  }

  private setUserId(email: string) {
    this.userService.getUserId(email).subscribe(id => {
      this.userService.userId = id;
    });
  }

  // private getUserEmail() {
  //   return app.auth().currentUser.email;
  // }

  private async signInWithProvider(provider) {
    return this.auth
      .signInWithPopup(provider)
      .then((cred) => {
        const { email, name } = <{ email: string; name: string }>(
          cred.additionalUserInfo.profile
        );
        this.snackBar.showSuccess('Connexion réussie');
        this.router.navigate(['home']);
        this.setUserId(email)

        if (cred.additionalUserInfo.isNewUser) {
          
          this.userService.create(email, name).subscribe();
        }
      })
      .catch((err) => {
        this.snackBar.showError(err.message, err.code);
      });
  }
}
