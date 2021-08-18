import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    MatSnackBarModule
  ],
})
export class CoreModule { }
