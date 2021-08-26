import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayComponent } from './play/play.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { GameLayoutComponent } from './game-layout/game-layout.component';

@NgModule({
  declarations: [PlayComponent, CreateComponent, EditComponent, GameLayoutComponent],
  imports: [
    SharedModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    GameRoutingModule,
    MatButtonModule
  ],
  exports: [PlayComponent],
})
export class GameModule {}
