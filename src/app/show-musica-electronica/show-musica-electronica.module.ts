import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowMusicaElectronicaPageRoutingModule } from './show-musica-electronica-routing.module';

import { ShowMusicaElectronicaPage } from './show-musica-electronica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowMusicaElectronicaPageRoutingModule
  ],
  declarations: [ShowMusicaElectronicaPage]
})
export class ShowMusicaElectronicaPageModule {}
