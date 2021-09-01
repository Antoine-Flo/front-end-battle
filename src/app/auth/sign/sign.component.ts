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

  logInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), this.checkPassword],
    ],
  });

  newAccountForm = this.formBuilder.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), this.checkPassword],
    ],
  });

  // Custom validator for password

  checkPassword(control) {
    let enteredPassword = control.value;
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return !passwordCheck.test(enteredPassword) && enteredPassword
      ? { requirements: true }
      : null;
  }

  constructor(
    private snackBar: SnackBarService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  connectWithGoogle() { this.authService.signinGoogle(); }

  connectWithGitHub() { this.authService.signinGitHub(); }

  onLogin(): void {
    const { email, password } = this.logInForm.value;

    this.authService
      .logInWithEmailPassword(email, password)
      .then(() => {
        this.snackBar.showSuccess('Connexion réussie');
        this.router.navigate(['home']);
      })
      .catch((err) => {
        this.snackBar.showError(err.message, err.code);
      });
  }

  onNewAccount(): void {
    const { userName, email, password } = this.newAccountForm.value;

    this.authService
      .createAccountWithEmailPassword(userName, email, password)
      .then(() => {
        this.snackBar.showSuccess(
          'Inscription réussie, mail de verification envoyé'
        );
        this.router.navigate(['home']);
      })
      .catch((err) => {
        this.snackBar.showError(err.message, err.code);
      });
  }
}
