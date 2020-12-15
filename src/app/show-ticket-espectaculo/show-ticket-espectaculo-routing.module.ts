import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowTicketEspectaculoPage } from './show-ticket-espectaculo.page';

const routes: Routes = [
  {
    path: '',
    component: ShowTicketEspectaculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowTicketEspectaculoPageRoutingModule {}
