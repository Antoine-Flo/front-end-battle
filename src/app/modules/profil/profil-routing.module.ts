import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { UserChallengesComponent } from './user-challenges/user-challenges.component';


const routes: Routes = [
  {path: "", component: ProfilComponent},
  {path: "challenges", component: UserChallengesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilRoutingModule {}