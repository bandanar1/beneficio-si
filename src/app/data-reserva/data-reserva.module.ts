import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataReservaPageRoutingModule } from './data-reserva-routing.module';

import { DataReservaPage } from './data-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataReservaPageRoutingModule
  ],
  declarations: [DataReservaPage]
})
export class DataReservaPageModule {}
