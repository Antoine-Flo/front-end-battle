import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { StartComponent } from './start/start.component';
import { SignComponent } from './sign/sign.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [StartComponent, SignComponent, SignUpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    RouterModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [StartComponent, SignComponent, SignUpComponent],
})
export class AuthModule {}
