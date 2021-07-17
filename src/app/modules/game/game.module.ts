import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayComponent } from './play/play.component';


@NgModule({
  declarations: [PlayComponent],
  imports: [
    SharedModule,
    CommonModule,
    GameRoutingModule
  ],
  exports: [
    PlayComponent
  ]
})
export class GameModule { }
