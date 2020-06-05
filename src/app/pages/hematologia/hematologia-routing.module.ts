import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HematologiaPage } from './hematologia.page';

const routes: Routes = [
  {
    path: '',
    component: HematologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HematologiaPageRoutingModule {}
