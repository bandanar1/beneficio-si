import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Producto1PageRoutingModule } from './producto1-routing.module';

import { Producto1Page } from './producto1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Producto1PageRoutingModule
  ],
  declarations: [Producto1Page]
})
export class Producto1PageModule {}
