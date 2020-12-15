import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowProductFarmacia1PageRoutingModule } from './show-product-farmacia1-routing.module';

import { ShowProductFarmacia1Page } from './show-product-farmacia1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowProductFarmacia1PageRoutingModule
  ],
  declarations: [ShowProductFarmacia1Page]
})
export class ShowProductFarmacia1PageModule {}
