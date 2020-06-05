import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilesDeLaboratorioPage } from './perfiles-de-laboratorio.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilesDeLaboratorioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilesDeLaboratorioPageRoutingModule {}
