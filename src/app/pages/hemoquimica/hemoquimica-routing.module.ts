import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HemoquimicaPage } from './hemoquimica.page';

const routes: Routes = [
  {
    path: '',
    component: HemoquimicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HemoquimicaPageRoutingModule {}
