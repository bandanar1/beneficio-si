import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresacomentariosPageRoutingModule } from './empresacomentarios-routing.module';

import { EmpresacomentariosPage } from './empresacomentarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresacomentariosPageRoutingModule
  ],
  declarations: [EmpresacomentariosPage]
})
export class EmpresacomentariosPageModule {}
