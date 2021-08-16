import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { PlayComponent } from './play/play.component';


const routes: Routes = [
  { path: 'play', component: PlayComponent},
  { path: 'create', component: CreateComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
