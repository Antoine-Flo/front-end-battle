import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { ProfileRoutingModule } from './profile-routing.module'
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserChallengesComponent } from './user-challenges/user-challenges.component';


@NgModule({
  declarations: [ProfileComponent, UserChallengesComponent],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
