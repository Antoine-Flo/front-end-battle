import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { SnackBarService } from 'src/app/core/services/snack-bar.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;

  get email() { return this.signUpForm.get('email') }
  get password() { return this.signUpForm.get('password') }
    

  signUpForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });


  constructor(
    private snackBar: SnackBarService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  connectWithGoogle() {
    this.authService.signinGoogle().then(() => {
      this.snackBar.showSuccess('Connexion réussie');
    }).catch((err) => {
      console.log(err);
      this.snackBar.showError(err.message, err.code);
    });
  }

  connectWithGitHub() {
    this.authService.signinGitHub().then(() => {
      this.snackBar.showSuccess('Connexion réussie');
    }).catch((err) => {
      console.log(err);
      this.snackBar.showError(err.message, err.code);
    });
  }

  onSubmit(): void {
    const { email, password } = this.signUpForm.value;
    
    if (this.type === 'signIn') {
      this.authService
        .signInWithEmailPassword(email, password)
        .then(() => {
          this.snackBar.showSuccess('Connexion réussie');
          this.router.navigate(['home']);
        })
        .catch((err) => {
          console.log(err);
          this.snackBar.showError(err.message, err.code);
        })
        
    } else if (this.type === 'signUp') {
      this.authService
        .signUpWithEmailPassword(email, password)
        .then(() => {
          this.snackBar.showSuccess('Inscription réussie, mail de verification envoyé');
          this.router.navigate(['home']);
        })
        .catch((err) => {
          console.log(err);
          this.snackBar.showError(err.message, err.code);
        });
    }
  }

}
