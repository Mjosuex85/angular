import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({

  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent
  ],

  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [
    HomePageComponent
  ],
})
export class GifModule { }
