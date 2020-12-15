import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowRestaurantPageRoutingModule } from './show-restaurant-routing.module';

import { ShowRestaurantPage } from './show-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowRestaurantPageRoutingModule
  ],
  declarations: [ShowRestaurantPage]
})
export class ShowRestaurantPageModule {}
