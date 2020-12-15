import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowProductDeliveryPage } from './show-product-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: ShowProductDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowProductDeliveryPageRoutingModule {}
