import { Component, OnInit } from '@angular/core';
// import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  connectWithGoogle() {
    this.authService.signinGoogle().then((userData: any) => {
      this.updateUser(userData)
    })
  }
  
  logOut() {
    this.authService.logout()
  }

  updateUser(userData :any) {
    console.log(userData)

  }
}
