import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import { HeaderComponent } from './header/header.component';
import {InputTextModule} from 'primeng/inputtext';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {GalleriaModule} from 'primeng/galleria';
import { HomeComponent } from './home/home.component';
import { AgileComponent } from './agile/agile.component';
import { ResourcesComponent } from './resources/resources.component';
import { TrainingComponent } from './training/training.component';
import {TabViewModule} from 'primeng/tabview';
import { TeamComponent } from './team/team.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AgileComponent,
    ResourcesComponent,
    TrainingComponent,
    TeamComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    AppRoutingModule,
    GalleriaModule,
    InputTextModule,
    TabViewModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
