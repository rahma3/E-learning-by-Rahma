import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


// Components for this module
import { ModulesComponent } from './modules/modules.component';
import { ModulesTableComponent } from './modules-table/modules-table.component';

// Routing for modules
import { ModulesRoutingModule } from './modules-routing.module';

@NgModule({
  declarations: [
    ModulesComponent,
    ModulesTableComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ],
  exports: [
    ModulesTableComponent  // Export if you plan to use this component outside the module
  ]
})
export class ModulesModule { }
