import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowProductFarmaciaPage } from './show-product-farmacia.page';

const routes: Routes = [
  {
    path: '',
    component: ShowProductFarmaciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowProductFarmaciaPageRoutingModule {}
