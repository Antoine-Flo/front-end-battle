import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { ProgressionComponent } from './progression/progression.component';


@NgModule({
  declarations: [HomeComponent, ChallengesComponent, ProgressionComponent],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    ChallengesComponent
  ]
})
export class HomeModule { }
