import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisionesPage } from './misiones.page';

const routes: Routes = [
  {
    path: '',
    component: MisionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisionesPageRoutingModule {}
