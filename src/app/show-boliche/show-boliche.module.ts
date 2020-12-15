import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowBolichePageRoutingModule } from './show-boliche-routing.module';

import { ShowBolichePage } from './show-boliche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowBolichePageRoutingModule
  ],
  declarations: [ShowBolichePage]
})
export class ShowBolichePageModule {}
