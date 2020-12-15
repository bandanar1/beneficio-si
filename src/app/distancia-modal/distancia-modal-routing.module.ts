import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistanciaModalPage } from './distancia-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DistanciaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistanciaModalPageRoutingModule {}
