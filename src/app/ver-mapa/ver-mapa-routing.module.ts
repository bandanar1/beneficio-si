import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMapaPage } from './ver-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: VerMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMapaPageRoutingModule {}
