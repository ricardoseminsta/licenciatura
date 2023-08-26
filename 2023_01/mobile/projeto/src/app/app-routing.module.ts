import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadChildren: () =>
      import('./inicio/inicio.module').then((m) => m.InicioPageModule),
  },  {
    path: 'aula03',
    loadChildren: () => import('./aula03/aula03.module').then( m => m.Aula03PageModule)
  },
  {
    path: 'aula4',
    loadChildren: () => import('./aula4/aula4.module').then( m => m.Aula4PageModule)
  },
  {
    path: 'aula5',
    loadChildren: () => import('./aula5/aula5.module').then( m => m.Aula5PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
