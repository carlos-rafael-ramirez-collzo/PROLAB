import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiquidosBiologicosPage } from './liquidos-biologicos.page';

const routes: Routes = [
  {
    path: '',
    component: LiquidosBiologicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiquidosBiologicosPageRoutingModule {}
