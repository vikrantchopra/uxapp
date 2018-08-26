import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AgileComponent} from './agile/agile.component';
import {ResourcesComponent} from './resources/resources.component';
import {TrainingComponent} from './training/training.component';
import {TeamComponent} from './team/team.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'agile',
    component: AgileComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'trainings',
    component: TrainingComponent
  },
  {
    path: 'team',
    component: TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
