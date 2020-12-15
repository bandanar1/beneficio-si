import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CanastaPageRoutingModule } from './canasta-routing.module';

import { CanastaPage } from './canasta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CanastaPageRoutingModule
  ],
  declarations: [CanastaPage]
})
export class CanastaPageModule {}
