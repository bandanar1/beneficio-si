import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowFarmaciaPageRoutingModule } from './show-farmacia-routing.module';

import { ShowFarmaciaPage } from './show-farmacia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowFarmaciaPageRoutingModule
  ],
  declarations: [ShowFarmaciaPage]
})
export class ShowFarmaciaPageModule {}
