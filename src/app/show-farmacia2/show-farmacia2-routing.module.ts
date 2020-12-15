import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowFarmacia2Page } from './show-farmacia2.page';

const routes: Routes = [
  {
    path: '',
    component: ShowFarmacia2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowFarmacia2PageRoutingModule {}
