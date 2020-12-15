import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowProductFarmacia3PageRoutingModule } from './show-product-farmacia3-routing.module';

import { ShowProductFarmacia3Page } from './show-product-farmacia3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowProductFarmacia3PageRoutingModule
  ],
  declarations: [ShowProductFarmacia3Page]
})
export class ShowProductFarmacia3PageModule {}
