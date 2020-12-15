import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestacadosModalPage } from './destacados-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DestacadosModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestacadosModalPageRoutingModule {}
