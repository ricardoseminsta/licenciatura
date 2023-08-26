import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aula4Page } from './aula4.page';

const routes: Routes = [
  {
    path: '',
    component: Aula4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aula4PageRoutingModule {}
