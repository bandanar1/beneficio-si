import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowProductDeliveryPageRoutingModule } from './show-product-delivery-routing.module';

import { ShowProductDeliveryPage } from './show-product-delivery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowProductDeliveryPageRoutingModule
  ],
  declarations: [ShowProductDeliveryPage]
})
export class ShowProductDeliveryPageModule {}
