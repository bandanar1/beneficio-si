import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataBolichePage } from './data-boliche.page';

const routes: Routes = [
  {
    path: '',
    component: DataBolichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataBolichePageRoutingModule {}
