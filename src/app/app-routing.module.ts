import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'hematologia',
    loadChildren: () => import('./pages/hematologia/hematologia.module').then( m => m.HematologiaPageModule)
  },
  {
    path: 'hemoquimica',
    loadChildren: () => import('./pages/hemoquimica/hemoquimica.module').then( m => m.HemoquimicaPageModule)
  },
  {
    path: 'hemostasia',
    loadChildren: () => import('./pages/hemostasia/hemostasia.module').then( m => m.HemostasiaPageModule)
  },
  {
    path: 'inmunologia',
    loadChildren: () => import('./pages/inmunologia/inmunologia.module').then( m => m.InmunologiaPageModule)
  },
  {
    path: 'liquidos-biologicos',
    loadChildren: () => import('./pages/liquidos-biologicos/liquidos-biologicos.module').then( m => m.LiquidosBiologicosPageModule)
  },
  {
    path: 'perfiles-de-laboratorio',
    loadChildren: () => import('./pages/perfiles-de-laboratorio/perfiles-de-laboratorio.module').then( m => m.PerfilesDeLaboratorioPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
