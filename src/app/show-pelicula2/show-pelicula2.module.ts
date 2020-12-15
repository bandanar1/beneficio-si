import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPelicula2PageRoutingModule } from './show-pelicula2-routing.module';

import { ShowPelicula2Page } from './show-pelicula2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPelicula2PageRoutingModule
  ],
  declarations: [ShowPelicula2Page]
})
export class ShowPelicula2PageModule {}
