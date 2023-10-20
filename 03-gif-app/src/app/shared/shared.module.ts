import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './components/sidebar/sidebar.component';
import { NavBarComponent } from './components/navbar/navbar.component';


@NgModule({

  declarations: [
    SideBarComponent,
    NavBarComponent
  ],

  exports: [
    SideBarComponent,
    NavBarComponent
  ],

  imports: [
    CommonModule
  ],

  providers: [],
})
export class SharedModule { }
