import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigcuentaPageRoutingModule } from './configcuenta-routing.module';

import { ConfigcuentaPage } from './configcuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigcuentaPageRoutingModule
  ],
  declarations: [ConfigcuentaPage]
})
export class ConfigcuentaPageModule {}
