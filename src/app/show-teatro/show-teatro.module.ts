import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowTeatroPageRoutingModule } from './show-teatro-routing.module';

import { ShowTeatroPage } from './show-teatro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowTeatroPageRoutingModule
  ],
  declarations: [ShowTeatroPage]
})
export class ShowTeatroPageModule {}
