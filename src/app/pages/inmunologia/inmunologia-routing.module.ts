import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmunologiaPage } from './inmunologia.page';

const routes: Routes = [
  {
    path: '',
    component: InmunologiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmunologiaPageRoutingModule {}
