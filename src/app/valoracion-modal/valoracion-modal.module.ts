import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValoracionModalPageRoutingModule } from './valoracion-modal-routing.module';

import { ValoracionModalPage } from './valoracion-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValoracionModalPageRoutingModule
  ],
  declarations: [ValoracionModalPage]
})
export class ValoracionModalPageModule {}
