import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowProductRestaurantPageRoutingModule } from './show-product-restaurant-routing.module';

import { ShowProductRestaurantPage } from './show-product-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowProductRestaurantPageRoutingModule
  ],
  declarations: [ShowProductRestaurantPage]
})
export class ShowProductRestaurantPageModule {}
