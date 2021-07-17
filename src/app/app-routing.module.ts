import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { StartComponent } from './auth/start/start.component';
import { GameModule } from './modules/game/game.module';

import { PlayComponent } from './modules/game/play/play.component';
import { ChallengesComponent } from './modules/home/challenges/challenges.component';
import { HomeModule } from './modules/home/home.module';
import { HomeComponent } from './modules/home/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'game', component: PlayComponent },
      { path: '', component: ChallengesComponent },
    ],
  },
  { path: 'start', component: StartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule, GameModule, AuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
