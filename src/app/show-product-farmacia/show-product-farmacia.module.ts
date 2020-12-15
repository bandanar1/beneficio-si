import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowProductFarmaciaPageRoutingModule } from './show-product-farmacia-routing.module';

import { ShowProductFarmaciaPage } from './show-product-farmacia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowProductFarmaciaPageRoutingModule
  ],
  declarations: [ShowProductFarmaciaPage]
})
export class ShowProductFarmaciaPageModule {}
