import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapOptionsPageRoutingModule } from './map-options-routing.module';

import { MapOptionsPage } from './map-options.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapOptionsPageRoutingModule
  ],
  declarations: [MapOptionsPage]
})
export class MapOptionsPageModule {}
