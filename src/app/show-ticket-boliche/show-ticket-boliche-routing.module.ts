import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowTicketBolichePage } from './show-ticket-boliche.page';

const routes: Routes = [
  {
    path: '',
    component: ShowTicketBolichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowTicketBolichePageRoutingModule {}
