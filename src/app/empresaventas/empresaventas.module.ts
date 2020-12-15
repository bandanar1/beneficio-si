import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresaventasPageRoutingModule } from './empresaventas-routing.module';

import { EmpresaventasPage } from './empresaventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresaventasPageRoutingModule
  ],
  declarations: [EmpresaventasPage]
})
export class EmpresaventasPageModule {}
