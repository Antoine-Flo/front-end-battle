import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { ProfilRoutingModule } from './profil-routing.module'
import { ProfilComponent } from './profil/profil.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserChallengesComponent } from './user-challenges/user-challenges.component';


@NgModule({
  declarations: [ProfilComponent, UserChallengesComponent],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    ProfilRoutingModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    ProfilComponent
  ]
})
export class ProfilModule { }
