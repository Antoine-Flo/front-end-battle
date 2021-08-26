import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserChallengesComponent } from './user-challenges/user-challenges.component';


const routes: Routes = [
  {path: "", component: ProfileComponent},
  {path: "challenges", component: UserChallengesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}