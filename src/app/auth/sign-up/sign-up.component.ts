import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm = this.formBuilder.group({
    mail: '',
    password: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private user: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {  
    const { mail, password } = this.signUpForm.value;
    this.authService.signUpWithEmailPassword(mail, password)
  }

  connectWithGoogle() {
    this.authService.signinGoogle().then((userData: any) => {
      this.router.navigate(['home'])
    });
  }

  connectWithGitHub() {
    this.authService.signinGitHub().then((userData: any) => {
      this.router.navigate(['home'])
    });
  }

}
