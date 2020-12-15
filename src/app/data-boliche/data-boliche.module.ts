import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataBolichePageRoutingModule } from './data-boliche-routing.module';

import { DataBolichePage } from './data-boliche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataBolichePageRoutingModule
  ],
  declarations: [DataBolichePage]
})
export class DataBolichePageModule {}
