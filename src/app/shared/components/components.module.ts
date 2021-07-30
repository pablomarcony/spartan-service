import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar/top-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TitlePagesComponent } from './title-pages/title-pages.component';



@NgModule({
  declarations: [
    TopBarComponent,
    HeaderComponent,
    FooterComponent,
    TitlePagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopBarComponent,
    HeaderComponent,
    FooterComponent,
    TitlePagesComponent
  ]
})
export class ComponentsModule { }
