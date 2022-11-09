import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import dades from './data.json';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

/**
 * @title Table with expandable rows
*/

@Component({
  selector: 'table-expandable-rows-example',
  styleUrls: ['table-expandable-rows-example.css'],
  templateUrl: 'table-expandable-rows-example.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableExpandableRowsExample {
  dataSource = new MatTableDataSource<dades>(ELEMENT_DATA);
  columnsToDisplay = ['country', 'percPoverty', 'lessThan10aDay', 'lessThan550aDay', 'dataYear'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: dades | any;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

}
/** Announce the change in sort state for assistive technology. */

interface dades {
  country?: string;
  percPoverty?: number;
  dataYear?: number;
  lessThan10aDay?: number;
  lessThan550aDay?: number;
  description?: string;
}

const ELEMENT_DATA: dades[] = dades;
