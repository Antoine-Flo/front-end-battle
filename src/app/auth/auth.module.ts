import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StartComponent } from './start/start.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [StartComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthModule { }
