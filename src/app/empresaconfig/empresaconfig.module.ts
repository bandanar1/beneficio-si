import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpresaconfigPageRoutingModule } from './empresaconfig-routing.module';

import { EmpresaconfigPage } from './empresaconfig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpresaconfigPageRoutingModule
  ],
  declarations: [EmpresaconfigPage]
})
export class EmpresaconfigPageModule {}
