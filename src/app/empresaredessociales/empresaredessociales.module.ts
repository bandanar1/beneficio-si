import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresaredessocialesPageRoutingModule } from './empresaredessociales-routing.module';

import { EmpresaredessocialesPage } from './empresaredessociales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresaredessocialesPageRoutingModule
  ],
  declarations: [EmpresaredessocialesPage]
})
export class EmpresaredessocialesPageModule {}
