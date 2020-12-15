import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPeliculasPageRoutingModule } from './show-peliculas-routing.module';

import { ShowPeliculasPage } from './show-peliculas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowPeliculasPageRoutingModule
  ],
  declarations: [ShowPeliculasPage]
})
export class ShowPeliculasPageModule {}
