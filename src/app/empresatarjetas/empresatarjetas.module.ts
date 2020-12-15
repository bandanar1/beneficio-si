import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresatarjetasPageRoutingModule } from './empresatarjetas-routing.module';

import { EmpresatarjetasPage } from './empresatarjetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresatarjetasPageRoutingModule
  ],
  declarations: [EmpresatarjetasPage]
})
export class EmpresatarjetasPageModule {}
