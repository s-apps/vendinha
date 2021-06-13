import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContasCreateComponent } from './contas-create/contas-create.component';
import { ContasReadComponent } from './contas-read/contas-read.component';
import { ContasUpdateComponent } from './contas-update/contas-update.component';

const routes: Routes = [
  {
    path: '',
    component: ContasReadComponent
  },
  {
    path: 'contas/create',
    component: ContasCreateComponent
  },
  {
    path: 'contas/update/:id',
    component: ContasUpdateComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContasRoutingModule { }
