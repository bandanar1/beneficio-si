import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowSupermercadosMayoristaPageRoutingModule } from './show-supermercados-mayorista-routing.module';

import { ShowSupermercadosMayoristaPage } from './show-supermercados-mayorista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowSupermercadosMayoristaPageRoutingModule
  ],
  declarations: [ShowSupermercadosMayoristaPage]
})
export class ShowSupermercadosMayoristaPageModule {}
