import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil/profil.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProfilComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProfilComponent
  ]
})
export class ProfilModule { }
