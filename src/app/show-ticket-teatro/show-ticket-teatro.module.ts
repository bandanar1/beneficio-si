import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowTicketTeatroPageRoutingModule } from './show-ticket-teatro-routing.module';

import { ShowTicketTeatroPage } from './show-ticket-teatro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowTicketTeatroPageRoutingModule
  ],
  declarations: [ShowTicketTeatroPage]
})
export class ShowTicketTeatroPageModule {}
