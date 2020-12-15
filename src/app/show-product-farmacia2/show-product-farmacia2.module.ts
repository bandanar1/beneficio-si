import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowProductFarmacia2PageRoutingModule } from './show-product-farmacia2-routing.module';

import { ShowProductFarmacia2Page } from './show-product-farmacia2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowProductFarmacia2PageRoutingModule
  ],
  declarations: [ShowProductFarmacia2Page]
})
export class ShowProductFarmacia2PageModule {}
