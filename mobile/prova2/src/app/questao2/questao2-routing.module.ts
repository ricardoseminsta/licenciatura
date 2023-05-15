import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Questao2Page } from './questao2.page';

const routes: Routes = [
  {
    path: '',
    component: Questao2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Questao2PageRoutingModule {}
