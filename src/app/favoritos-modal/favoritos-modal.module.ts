import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritosModalPageRoutingModule } from './favoritos-modal-routing.module';

import { FavoritosModalPage } from './favoritos-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritosModalPageRoutingModule
  ],
  declarations: [FavoritosModalPage]
})
export class FavoritosModalPageModule {}
