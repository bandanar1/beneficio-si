import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowMisionPageRoutingModule } from './show-mision-routing.module';

import { ShowMisionPage } from './show-mision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowMisionPageRoutingModule
  ],
  declarations: [ShowMisionPage]
})
export class ShowMisionPageModule {}
