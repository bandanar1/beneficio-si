import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisionDetailsPage } from './mision-details.page';

const routes: Routes = [
  {
    path: '',
    component: MisionDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisionDetailsPageRoutingModule {}
