import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryMiranoPage } from './delivery-mirano.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryMiranoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryMiranoPageRoutingModule {}
