import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MistarjetasPageRoutingModule } from './mistarjetas-routing.module';

import { MistarjetasPage } from './mistarjetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MistarjetasPageRoutingModule
  ],
  declarations: [MistarjetasPage]
})
export class MistarjetasPageModule {}
