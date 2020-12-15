import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroEmpresaPageRoutingModule } from './registro-empresa-routing.module';

import { RegistroEmpresaPage } from './registro-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroEmpresaPageRoutingModule
  ],
  declarations: [RegistroEmpresaPage]
})
export class RegistroEmpresaPageModule {}
