import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidearComponent } from './pages/sidebar/sidebar.component';
import { SharedSearchBoxComponent } from './components/shared-search-box/shared-search-box.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SidearComponent,
    SharedSearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent,
    SidearComponent,
    SharedSearchBoxComponent
  ]
})
export class SharedModule { }
