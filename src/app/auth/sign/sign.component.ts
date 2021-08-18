import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(7)]],
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
    const { email, password } = this.signUpForm.value;
    
    if (this.type === 'signIn') {
      this.authService
        .signInWithEmailPassword(email, password)
        .then(() => {
          this.router.navigate(['home']);
        })
        .catch((err) => {
          console.log(err)
        })
        
    } else if (this.type === 'signUp') {
      this.authService
        .signUpWithEmailPassword(email, password)
        .then(() => {
          this.router.navigate(['home']);
        })
        .catch((err) => {
          console.log(err)
        });
    }
  }


  getErrorEmail() {
    return this.signUpForm.get('email').hasError('required') ? 'Champ requis' :
      this.signUpForm.get('email').hasError('pattern') ? 'Format invalide' :
        this.signUpForm.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  getErrorPassword() {
    return this.signUpForm.get('password').hasError('required') ? 'Champ requis' :
      this.signUpForm.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }


}
