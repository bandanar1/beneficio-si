import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisionDetailsPageRoutingModule } from './mision-details-routing.module';

import { MisionDetailsPage } from './mision-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisionDetailsPageRoutingModule
  ],
  declarations: [MisionDetailsPage]
})
export class MisionDetailsPageModule {}
