import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  connectWithGoogle() {
    this.authService.signinGoogle().then((userData: any) => {
      this.updateUser(userData);
      this.router.navigate(['home'])
    });
  }

  connectWithGitHub() {
    this.authService.signinGitHub().then((userData: any) => {
      this.updateUser(userData);
      this.router.navigate(['home'])
    });
  }

  updateUser(userData: any) {
    console.log(userData);
  }

}
