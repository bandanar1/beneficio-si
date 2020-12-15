import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowSupermarketPageRoutingModule } from './show-supermarket-routing.module';

import { ShowSupermarketPage } from './show-supermarket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowSupermarketPageRoutingModule
  ],
  declarations: [ShowSupermarketPage]
})
export class ShowSupermarketPageModule {}
