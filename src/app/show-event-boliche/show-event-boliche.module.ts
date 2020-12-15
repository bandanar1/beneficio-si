import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowEventBolichePageRoutingModule } from './show-event-boliche-routing.module';

import { ShowEventBolichePage } from './show-event-boliche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowEventBolichePageRoutingModule
  ],
  declarations: [ShowEventBolichePage]
})
export class ShowEventBolichePageModule {}
