import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Table } from 'src/app/core/models/table.model';

export interface Table {
  headers?: HeaderCell[];
  data?: any;
  checkBox?: boolean;
  actionEdit?: boolean;
  actionDelete?: boolean;
  pagination?: boolean;
}

export interface HeaderCell {
  name: string;
  sortable?: boolean;
  width?: number;
  content?: string;
  type?: string;
}

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Input() config!: Table;
  @Input() loading?: boolean = false;
  @Output() clickEdit = new EventEmitter<any>();
  @Output() clickDelete = new EventEmitter<any>();
  @Output() selectedRows = new EventEmitter<any>();

  rows?: any[] = []
  masterChecked?: boolean = false

  constructor() {
  }

  ngOnInit(): void {
  }

  edit(x: any) {
    this.clickEdit.emit(x)
  }

  delete(x: any) {
    this.clickDelete.emit(x)
    console.log(this.rows)
  }

  select(e: any, row: any) {
    const existing = this.rows?.indexOf(row)
    console.log(existing)
    if (existing! < 0) {
      console.warn("push")
      this.rows?.push(row)
    } else {
      this.masterChecked = false

      console.warn("delete")
      this.rows = this.rows?.filter(x => x != row)
    }

    this.selectedRows.emit(this.rows)
  }

  selectAll() {
    this.masterChecked = !this.masterChecked

    document.getElementsByName('row-check').forEach((x: any) => {
      // console.log(x['checked'])
      x.checked = this.masterChecked ? true : false
    })
    console.log(this.masterChecked)
    if (this.masterChecked) {
      console.log("HERE1")
      this.rows = this.config.data
    } else {
      console.log("HERE2")
      this.rows = [];
    }

    this.selectedRows.emit(this.rows)
    // console.log(this.rows)
  }

}
