import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StartComponent } from './start/start.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';



@NgModule({
  declarations: [StartComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    StartComponent,
    SignInComponent,
    SignUpComponent
  ]
})
export class AuthModule { }
