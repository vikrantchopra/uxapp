import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AgileComponent} from './agile/agile.component';
import {ResourcesComponent} from './resources/resources.component';
import {TrainingComponent} from './training/training.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
