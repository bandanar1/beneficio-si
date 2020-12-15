import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowCinemarkPageRoutingModule } from './show-cinemark-routing.module';

import { ShowCinemarkPage } from './show-cinemark.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowCinemarkPageRoutingModule
  ],
  declarations: [ShowCinemarkPage]
})
export class ShowCinemarkPageModule {}
