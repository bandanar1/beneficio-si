import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Producto1Page } from './producto1.page';

const routes: Routes = [
  {
    path: '',
    component: Producto1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Producto1PageRoutingModule {}
