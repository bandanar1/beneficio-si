import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BolichePageRoutingModule } from './boliche-routing.module';

import { BolichePage } from './boliche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BolichePageRoutingModule
  ],
  declarations: [BolichePage]
})
export class BolichePageModule {}
