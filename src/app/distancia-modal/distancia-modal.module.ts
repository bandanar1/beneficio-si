import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistanciaModalPageRoutingModule } from './distancia-modal-routing.module';

import { DistanciaModalPage } from './distancia-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistanciaModalPageRoutingModule
  ],
  declarations: [DistanciaModalPage]
})
export class DistanciaModalPageModule {}
