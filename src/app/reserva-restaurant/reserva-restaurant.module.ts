import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaRestaurantPageRoutingModule } from './reserva-restaurant-routing.module';

import { ReservaRestaurantPage } from './reserva-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaRestaurantPageRoutingModule
  ],
  declarations: [ReservaRestaurantPage]
})
export class ReservaRestaurantPageModule {}
