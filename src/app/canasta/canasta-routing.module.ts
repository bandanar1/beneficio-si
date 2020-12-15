import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanastaPage } from './canasta.page';

const routes: Routes = [
  {
    path: '',
    component: CanastaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanastaPageRoutingModule {}
