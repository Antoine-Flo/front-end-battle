import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;

  signUpForm = this.formBuilder.group({
    mail: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  connectWithGoogle() {
    this.authService.signinGoogle();
  }

  connectWithGitHub() {
    this.authService.signinGitHub();
  }

  onSubmit(): void {
    const { mail, password } = this.signUpForm.value;

    if (this.type === 'signIn') {
      this.authService
        .signInWithEmailPassword(mail, password)
        .then(() => {
          this.router.navigate(['home']);
        })
        .catch((err) => {
          console.log(err)
        })
    } else if (this.type === 'signUp') {
      this.authService
        .signUpWithEmailPassword(mail, password)
        .then(() => {
          this.router.navigate(['home']);
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }
}
