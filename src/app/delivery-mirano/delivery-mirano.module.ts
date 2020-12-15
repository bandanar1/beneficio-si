import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeliveryMiranoPageRoutingModule } from './delivery-mirano-routing.module';

import { DeliveryMiranoPage } from './delivery-mirano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeliveryMiranoPageRoutingModule
  ],
  declarations: [DeliveryMiranoPage]
})
export class DeliveryMiranoPageModule {}
