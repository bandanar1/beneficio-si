import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowEmpresaProductoGastronomiaPageRoutingModule } from './show-empresa-producto-gastronomia-routing.module';

import { ShowEmpresaProductoGastronomiaPage } from './show-empresa-producto-gastronomia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowEmpresaProductoGastronomiaPageRoutingModule
  ],
  declarations: [ShowEmpresaProductoGastronomiaPage]
})
export class ShowEmpresaProductoGastronomiaPageModule {}
