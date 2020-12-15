import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresaveresumenPageRoutingModule } from './empresaveresumen-routing.module';

import { EmpresaveresumenPage } from './empresaveresumen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresaveresumenPageRoutingModule
  ],
  declarations: [EmpresaveresumenPage]
})
export class EmpresaveresumenPageModule {}
