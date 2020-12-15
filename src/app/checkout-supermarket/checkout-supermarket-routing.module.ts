import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckoutSupermarketPage } from './checkout-supermarket.page';

const routes: Routes = [
  {
    path: '',
    component: CheckoutSupermarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckoutSupermarketPageRoutingModule {}
