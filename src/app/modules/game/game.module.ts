import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayComponent } from './pages/play/play.component';


@NgModule({
  declarations: [PlayComponent],
  imports: [
    SharedModule,
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
