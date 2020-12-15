import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowOpinionesPageRoutingModule } from './show-opiniones-routing.module';

import { ShowOpinionesPage } from './show-opiniones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowOpinionesPageRoutingModule
  ],
  declarations: [ShowOpinionesPage]
})
export class ShowOpinionesPageModule {}
