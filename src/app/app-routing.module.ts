import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgGridEditableComponent } from './ag-grid-editable/ag-grid-editable.component';

const routes: Routes = [
  { path: '', component: AgGridEditableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
