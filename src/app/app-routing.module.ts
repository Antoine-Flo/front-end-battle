import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { StartComponent } from './auth/start/start.component';

import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const redirectUnauthorizedToStart = () => redirectUnauthorizedTo(['start']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  {
    path: 'start',
    component: StartComponent,
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'profile',
    loadChildren: () =>
    import('./modules/profile/profile.module').then((m) => m.ProfileModule),
    ...canActivate(redirectUnauthorizedToStart),
  },
  {
    path: 'home',
    loadChildren: () =>
    import('./modules/home/home.module').then((m) => m.HomeModule),
    ...canActivate(redirectUnauthorizedToStart),
  },
  {
    path: 'game',
    loadChildren: () =>
    import('./modules/game/game.module').then((m) => m.GameModule),
    ...canActivate(redirectUnauthorizedToStart),
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,   {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
