import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowTicketTeatroPage } from './show-ticket-teatro.page';

const routes: Routes = [
  {
    path: '',
    component: ShowTicketTeatroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowTicketTeatroPageRoutingModule {}
