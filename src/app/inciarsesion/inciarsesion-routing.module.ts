import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InciarsesionPage } from './inciarsesion.page';

const routes: Routes = [
  {
    path: '',
    component: InciarsesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InciarsesionPageRoutingModule {}
