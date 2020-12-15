import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaRestaurantPage } from './reserva-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaRestaurantPageRoutingModule {}
