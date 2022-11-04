import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridEditableComponent } from './ag-grid-editable/ag-grid-editable.component';
import { AgGridModule } from 'ag-grid-angular';
import { BtnCellRenderer } from './helper/btn-cell-renderer.component

@NgModule({
  declarations: [
    AppComponent,
    AgGridEditableComponent,
    BtnCellRenderer,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
