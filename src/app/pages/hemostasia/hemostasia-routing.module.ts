import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HemostasiaPage } from './hemostasia.page';

const routes: Routes = [
  {
    path: '',
    component: HemostasiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HemostasiaPageRoutingModule {}
