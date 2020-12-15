import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowTicketEspectaculoPageRoutingModule } from './show-ticket-espectaculo-routing.module';

import { ShowTicketEspectaculoPage } from './show-ticket-espectaculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowTicketEspectaculoPageRoutingModule
  ],
  declarations: [ShowTicketEspectaculoPage]
})
export class ShowTicketEspectaculoPageModule {}
