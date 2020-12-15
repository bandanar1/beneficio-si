import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowMisionPage } from './show-mision.page';

const routes: Routes = [
  {
    path: '',
    component: ShowMisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowMisionPageRoutingModule {}
