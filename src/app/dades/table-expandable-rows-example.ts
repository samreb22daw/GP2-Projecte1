import {Component} from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import dades from './data.json';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Table with expandable rows
*/

@Component({
  selector: 'table-expandable-rows-example',
  styleUrls: ['table-expandable-rows-example.css'],
  templateUrl: 'table-expandable-rows-example.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableExpandableRowsExample {
  dataSource = new MatTableDataSource<dades>(ELEMENT_DATA);
  columnsToDisplay = ['country', 'percPoverty', 'dataYear', 'lessThan10aDay','lessThan550aDay'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: dades | any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
}

interface dades {
  country?: string;
  percPoverty?: number;
  dataYear?: number;
  lessThan10aDay?: number;
  lessThan550aDay?: number;
  description?: string;
}

const ELEMENT_DATA: dades[] = dades;

console.log(dades);
