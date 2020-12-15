import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowOpinionesPage } from './show-opiniones.page';

const routes: Routes = [
  {
    path: '',
    component: ShowOpinionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowOpinionesPageRoutingModule {}
