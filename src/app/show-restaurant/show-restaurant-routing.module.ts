import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowRestaurantPage } from './show-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: ShowRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowRestaurantPageRoutingModule {}
