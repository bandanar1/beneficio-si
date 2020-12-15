import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowComidaItalianaPageRoutingModule } from './show-comida-italiana-routing.module';

import { ShowComidaItalianaPage } from './show-comida-italiana.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowComidaItalianaPageRoutingModule
  ],
  declarations: [ShowComidaItalianaPage]
})
export class ShowComidaItalianaPageModule {}
