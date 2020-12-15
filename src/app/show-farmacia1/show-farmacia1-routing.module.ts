import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowFarmacia1Page } from './show-farmacia1.page';

const routes: Routes = [
  {
    path: '',
    component: ShowFarmacia1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowFarmacia1PageRoutingModule {}
