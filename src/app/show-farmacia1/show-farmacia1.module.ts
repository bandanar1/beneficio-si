import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowFarmacia1PageRoutingModule } from './show-farmacia1-routing.module';

import { ShowFarmacia1Page } from './show-farmacia1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowFarmacia1PageRoutingModule
  ],
  declarations: [ShowFarmacia1Page]
})
export class ShowFarmacia1PageModule {}
