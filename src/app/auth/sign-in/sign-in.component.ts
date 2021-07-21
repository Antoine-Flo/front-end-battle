import { Component, OnInit } from '@angular/core';
// import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  connectWithGoogle() {
    this.authService.signinGoogle().then((userData: any) => {
      this.updateUser(userData);
      this.router.navigate(['home'])
    });
  }

  logOut() {
    this.authService.logout();
  }

  updateUser(userData: any) {
    console.log(userData);
  }
}
