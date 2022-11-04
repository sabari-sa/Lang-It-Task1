import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { BtnCellRenderer } from '../helper/btn-cell-renderer.component';

@Component({
  selector: 'app-ag-grid-editable',
  templateUrl: './ag-grid-editable.component.html',
  styleUrls: ['./ag-grid-editable.component.css']
})
export class AgGridEditableComponent implements OnInit {

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  public columnDefs;
  public defaultColDef;
  public rowData: any;

  constructor(private http: HttpClient) {
    this.columnDefs = [
      {
        field: 'athlete',
        cellRenderer: BtnCellRenderer,
        cellRendererParams: {
          clicked: function (field: any) {
            alert(`${field} was clicked`);
          },
        },
        minWidth: 150,
      },
      {
        field: 'age',
        maxWidth: 90,
      },
      {
        field: 'country',
        minWidth: 150,
      },
     
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 100,
    };

    this.rowData = [
      {
        athlete :'13231',
        age:'12',
        country:'india'
      }
    ] 
  }

}
