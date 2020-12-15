import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BolichePage } from './boliche.page';

const routes: Routes = [
  {
    path: '',
    component: BolichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BolichePageRoutingModule {}
