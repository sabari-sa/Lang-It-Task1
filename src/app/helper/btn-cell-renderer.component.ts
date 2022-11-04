import { Component, OnDestroy } from '@angular/core';

import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'btn-cell-renderer',
  template: `
    <button (click)="btnClickedHandler($event)">Click me!</button>
  `,
})
export class BtnCellRenderer implements ICellRendererAngularComp {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler(event: any) {
    this.params.clicked(this.params.value);
  }

  refresh() {
    return false;
  }
}
