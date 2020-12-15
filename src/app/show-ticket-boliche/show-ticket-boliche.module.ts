import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowTicketBolichePageRoutingModule } from './show-ticket-boliche-routing.module';

import { ShowTicketBolichePage } from './show-ticket-boliche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowTicketBolichePageRoutingModule
  ],
  declarations: [ShowTicketBolichePage]
})
export class ShowTicketBolichePageModule {}
