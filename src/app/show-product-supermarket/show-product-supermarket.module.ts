import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowProductSupermarketPageRoutingModule } from './show-product-supermarket-routing.module';

import { ShowProductSupermarketPage } from './show-product-supermarket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowProductSupermarketPageRoutingModule
  ],
  declarations: [ShowProductSupermarketPage]
})
export class ShowProductSupermarketPageModule {}
