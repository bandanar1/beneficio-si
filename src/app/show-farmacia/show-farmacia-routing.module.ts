import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowFarmaciaPage } from './show-farmacia.page';

const routes: Routes = [
  {
    path: '',
    component: ShowFarmaciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowFarmaciaPageRoutingModule {}
