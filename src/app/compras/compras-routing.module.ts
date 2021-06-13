import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprasCreateComponent } from './compras-create/compras-create.component';

const routes: Routes = [
  {
    path: 'create',
    component: ComprasCreateComponent
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
export class ComprasRoutingModule { }
