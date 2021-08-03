import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './auth/start/start.component';
import { PlayComponent } from './modules/game/play/play.component';
import { HomeComponent } from './modules/home/home/home.component';

import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ProfilComponent } from './modules/profil/profil/profil.component';
import { CreateComponent } from './modules/game/create/create.component';

const redirectUnauthorizedToStart = () => redirectUnauthorizedTo(['start'])
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartComponent, ...canActivate(redirectLoggedInToHome)},
  { path: 'profil', component: ProfilComponent, ...canActivate(redirectUnauthorizedToStart)},
  { path: 'home', component: HomeComponent, ...canActivate(redirectUnauthorizedToStart)},
  { path: 'play', component: PlayComponent,  ...canActivate(redirectUnauthorizedToStart),},
  { path: 'create', component: CreateComponent,  ...canActivate(redirectUnauthorizedToStart),},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
