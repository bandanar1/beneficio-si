import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InciarsesionPageRoutingModule } from './inciarsesion-routing.module';

import { InciarsesionPage } from './inciarsesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InciarsesionPageRoutingModule
  ],
  declarations: [InciarsesionPage]
})
export class InciarsesionPageModule {}
