import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthModule } from './auth/auth.module';
import { GameModule } from './modules/game/game.module';
import { HomeModule } from './modules/home/home.module';

import { StartComponent } from './auth/start/start.component';
import { PlayComponent } from './modules/game/play/play.component';
import { ChallengesComponent } from './modules/home/challenges/challenges.component';
import { HomeComponent } from './modules/home/home/home.component';

import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const redirectUnauthorizedToStart = () => redirectUnauthorizedTo(['start'])
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartComponent, ...canActivate(redirectLoggedInToHome) },
  { path: 'game', component: PlayComponent,  ...canActivate(redirectUnauthorizedToStart)},
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectUnauthorizedToStart),
    children: [
      { path: 'game', component: PlayComponent },
      { path: '', component: ChallengesComponent },
    ],
  },
  { path: '**', component:  PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule, GameModule, AuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
