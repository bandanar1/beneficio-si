import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowProductSupermarketPage } from './show-product-supermarket.page';

const routes: Routes = [
  {
    path: '',
    component: ShowProductSupermarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowProductSupermarketPageRoutingModule {}
