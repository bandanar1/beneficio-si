import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowProductFarmacia1Page } from './show-product-farmacia1.page';

const routes: Routes = [
  {
    path: '',
    component: ShowProductFarmacia1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowProductFarmacia1PageRoutingModule {}
