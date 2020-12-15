import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowBolichePage } from './show-boliche.page';

const routes: Routes = [
  {
    path: '',
    component: ShowBolichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowBolichePageRoutingModule {}
