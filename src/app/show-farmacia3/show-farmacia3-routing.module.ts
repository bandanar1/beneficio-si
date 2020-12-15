import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowFarmacia3Page } from './show-farmacia3.page';

const routes: Routes = [
  {
    path: '',
    component: ShowFarmacia3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowFarmacia3PageRoutingModule {}
