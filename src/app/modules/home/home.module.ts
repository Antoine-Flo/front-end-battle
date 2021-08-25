import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ProgressionComponent } from './progression/progression.component';

@NgModule({
  declarations: [HomeComponent,  ProgressionComponent],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatDividerModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
