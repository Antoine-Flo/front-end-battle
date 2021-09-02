import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { PlayComponent } from './play/play.component';


const routes: Routes = [
  { path: 'play/:id', component: PlayComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'create', component: CreateComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
