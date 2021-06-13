import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContasRoutingModule } from './contas-routing.module';
import { ContasReadComponent } from './contas-read/contas-read.component';
import { ContasCreateComponent } from './contas-create/contas-create.component';
import { ContasDeleteComponent } from './contas-delete/contas-delete.component';
import { ContasUpdateComponent } from './contas-update/contas-update.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContasReadComponent,
    ContasCreateComponent,
    ContasDeleteComponent,
    ContasUpdateComponent
  ],
  imports: [
    CommonModule,
    ContasRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContasModule { }
