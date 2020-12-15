import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowCinemarkPage } from './show-cinemark.page';

const routes: Routes = [
  {
    path: '',
    component: ShowCinemarkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowCinemarkPageRoutingModule {}
