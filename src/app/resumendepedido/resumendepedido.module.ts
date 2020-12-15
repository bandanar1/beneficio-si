import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumendepedidoPageRoutingModule } from './resumendepedido-routing.module';

import { ResumendepedidoPage } from './resumendepedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumendepedidoPageRoutingModule
  ],
  declarations: [ResumendepedidoPage]
})
export class ResumendepedidoPageModule {}
