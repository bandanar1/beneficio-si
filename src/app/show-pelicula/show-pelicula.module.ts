import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPeliculaPageRoutingModule } from './show-pelicula-routing.module';

import { ShowPeliculaPage } from './show-pelicula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPeliculaPageRoutingModule
  ],
  declarations: [ShowPeliculaPage]
})
export class ShowPeliculaPageModule {}
