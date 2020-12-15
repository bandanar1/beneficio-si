import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresapedidosPageRoutingModule } from './empresapedidos-routing.module';

import { EmpresapedidosPage } from './empresapedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresapedidosPageRoutingModule
  ],
  declarations: [EmpresapedidosPage]
})
export class EmpresapedidosPageModule {}
