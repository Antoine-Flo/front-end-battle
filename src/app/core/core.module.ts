import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http'
import { AngularFireAuth } from '@angular/fire/auth';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    AngularFireAuth
  ]
})
export class CoreModule { }
