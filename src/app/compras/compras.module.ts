import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasCreateComponent } from './compras-create/compras-create.component';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ComprasCreateComponent,
  ],
  imports: [
    CommonModule,
    ComprasRoutingModule,
    MaterialDesignModule,
    ReactiveFormsModule
  ]
})
export class comprasModule { }
