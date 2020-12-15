import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HamburguesamcPage } from './hamburguesamc.page';

const routes: Routes = [
  {
    path: '',
    component: HamburguesamcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HamburguesamcPageRoutingModule {}
