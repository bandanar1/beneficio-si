import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowProductFarmacia3Page } from './show-product-farmacia3.page';

const routes: Routes = [
  {
    path: '',
    component: ShowProductFarmacia3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowProductFarmacia3PageRoutingModule {}
