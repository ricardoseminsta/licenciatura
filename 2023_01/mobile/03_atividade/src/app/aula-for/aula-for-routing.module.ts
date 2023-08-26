import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AulaForPage } from './aula-for.page';

const routes: Routes = [
  {
    path: '',
    component: AulaForPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AulaForPageRoutingModule {}
