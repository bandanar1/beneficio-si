import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutSupermarketPageRoutingModule } from './checkout-supermarket-routing.module';

import { CheckoutSupermarketPage } from './checkout-supermarket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutSupermarketPageRoutingModule
  ],
  declarations: [CheckoutSupermarketPage]
})
export class CheckoutSupermarketPageModule {}
