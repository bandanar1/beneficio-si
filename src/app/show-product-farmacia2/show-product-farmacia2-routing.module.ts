import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowProductFarmacia2Page } from './show-product-farmacia2.page';

const routes: Routes = [
  {
    path: '',
    component: ShowProductFarmacia2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowProductFarmacia2PageRoutingModule {}
