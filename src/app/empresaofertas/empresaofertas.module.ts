import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresaofertasPageRoutingModule } from './empresaofertas-routing.module';

import { EmpresaofertasPage } from './empresaofertas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresaofertasPageRoutingModule
  ],
  declarations: [EmpresaofertasPage]
})
export class EmpresaofertasPageModule {}
