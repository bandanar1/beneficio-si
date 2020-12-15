import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisionesPageRoutingModule } from './misiones-routing.module';

import { MisionesPage } from './misiones.page';
import { toUnicode } from 'punycode';
import { ShowMisionPageModule } from '../show-mision/show-mision.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisionesPageRoutingModule,
    //ShowMisionPageModule,
  ],
  declarations: [MisionesPage]
})
export class MisionesPageModule {}
