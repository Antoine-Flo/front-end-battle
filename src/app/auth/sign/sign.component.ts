import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar,
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
    const { email, password } = this.signUpForm.value;
    
    if (this.type === 'signIn') {
      this.authService
        .signInWithEmailPassword(email, password)
        .then(() => {
          this.router.navigate(['home']);
        })
        .catch((err) => {
          console.log(err);
          this.showError(err.code);
        })
        
    } else if (this.type === 'signUp') {
      this.authService
        .signUpWithEmailPassword(email, password)
        .then(() => {
          this.showSuccess();
          this.router.navigate(['home']);
        })
        .catch((err) => {
          console.log(err);
          
          this.showError(err.code);
        });
    }
  }


  showError(code: string) {

    const bar = (mess) => this.snackBar.open(mess, 'Fermer', { duration: 3000 });

    if(code === "auth/email-already-in-use") {bar('E-mail déjà utilisé')}
    if(code === "auth/too-many-requests") {bar(`Trop de tentatives, l'accés à ce compte a temporairement été suspendu`)}
    if(code === "auth/weak-password") {bar(`Mot de passe trop faible, 6 charactères minimum.`)}

  }

  showSuccess() {
    this.snackBar.open('Inscription réussi, mail de confirmation envoyé', 'Fermer', { duration: 3000 });
  }

}
