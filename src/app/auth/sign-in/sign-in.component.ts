import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private user: UserService
  ) {}

  ngOnInit(): void {}

  connectWithGoogle() {
    this.authService.signinGoogle().then((userData: any) => {
      this.user.createUser(userData);
      this.router.navigate(['home']);
    });
  }

  connectWithGitHub() {
    this.authService.signinGitHub().then((userData: any) => {
      this.user.createUser(userData);
      this.router.navigate(['home']);
    });
  }
}
