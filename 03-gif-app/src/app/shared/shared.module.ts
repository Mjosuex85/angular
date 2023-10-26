import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';


@NgModule({

  declarations: [
    SideBarComponent,
    LazyImageComponent
  ],

  exports: [
    SideBarComponent,
    LazyImageComponent
  ],

  imports: [
    CommonModule
  ],

  providers: [],
})
export class SharedModule { }
