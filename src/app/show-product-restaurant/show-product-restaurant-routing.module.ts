import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowProductRestaurantPage } from './show-product-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: ShowProductRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowProductRestaurantPageRoutingModule {}
