import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContatoComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }