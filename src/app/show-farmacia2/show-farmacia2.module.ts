import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowFarmacia2PageRoutingModule } from './show-farmacia2-routing.module';

import { ShowFarmacia2Page } from './show-farmacia2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowFarmacia2PageRoutingModule
  ],
  declarations: [ShowFarmacia2Page]
})
export class ShowFarmacia2PageModule {}
