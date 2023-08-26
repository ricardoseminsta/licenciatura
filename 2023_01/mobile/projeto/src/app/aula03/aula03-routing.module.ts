import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Aula03Page } from './aula03.page';

const routes: Routes = [
  {
    path: '',
    component: Aula03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Aula03PageRoutingModule {}
