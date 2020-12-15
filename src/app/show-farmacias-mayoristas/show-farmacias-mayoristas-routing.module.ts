import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowFarmaciasMayoristasPage } from './show-farmacias-mayoristas.page';

const routes: Routes = [
  {
    path: '',
    component: ShowFarmaciasMayoristasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowFarmaciasMayoristasPageRoutingModule {}
