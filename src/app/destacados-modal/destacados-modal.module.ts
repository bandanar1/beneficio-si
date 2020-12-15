import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestacadosModalPageRoutingModule } from './destacados-modal-routing.module';

import { DestacadosModalPage } from './destacados-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestacadosModalPageRoutingModule
  ],
  declarations: [DestacadosModalPage]
})
export class DestacadosModalPageModule {}
