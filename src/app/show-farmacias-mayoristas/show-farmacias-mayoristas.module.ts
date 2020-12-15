import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowFarmaciasMayoristasPageRoutingModule } from './show-farmacias-mayoristas-routing.module';

import { ShowFarmaciasMayoristasPage } from './show-farmacias-mayoristas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowFarmaciasMayoristasPageRoutingModule
  ],
  declarations: [ShowFarmaciasMayoristasPage]
})
export class ShowFarmaciasMayoristasPageModule {}
