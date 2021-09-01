import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';

import { SharedModule } from '../shared/shared.module';
import { StartComponent } from './start/start.component';
import { SignComponent } from './sign/sign.component';

@NgModule({
  declarations: [StartComponent, SignComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    RouterModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatDividerModule
  ],
  exports: [StartComponent, SignComponent],
})
export class AuthModule {}
