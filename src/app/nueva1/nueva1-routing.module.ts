import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nueva1Page } from './nueva1.page';

const routes: Routes = [
  {
    path: '',
    component: Nueva1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Nueva1PageRoutingModule {}
