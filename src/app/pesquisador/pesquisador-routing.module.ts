import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesquisadorPage } from './pesquisador.page';

const routes: Routes = [
  {
    path: '',
    component: PesquisadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesquisadorPageRoutingModule {}
