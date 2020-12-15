import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowFarmacia3PageRoutingModule } from './show-farmacia3-routing.module';

import { ShowFarmacia3Page } from './show-farmacia3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowFarmacia3PageRoutingModule
  ],
  declarations: [ShowFarmacia3Page]
})
export class ShowFarmacia3PageModule {}
