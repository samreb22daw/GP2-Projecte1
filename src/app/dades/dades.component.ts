import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import dades from '../../assets/dades/dades.json';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

/**
 * @title Table with expandable rows
*/

@Component({
  selector: 'dades-component',
  styleUrls: ['dades.component.css'],
  templateUrl: 'dades.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger("animacioText", [
      state('hidden', style({transform: 'translateY(50%)', opacity:0})),
      state('shown', style({transform: 'translateY(100%)', opacity: 1})),
      transition('hidden => shown', [animate('1s')]),
    ]),
    trigger("animacioTaula", [
      state('hidden', style({transform: 'translateY(50%)', opacity:0})),
      state('shown', style({transform: 'translateY(0%)', opacity: 1})),
      transition('hidden => shown', [animate('0.7s')]),
    ]),         
  ]
})

export class TaulaDades {
  dataSource = new MatTableDataSource<dades>(ELEMENT_DATA);
  columnsToDisplay = ['country', 'population', 'percPoverty', 'literacyRate15Above', 'access2Electricity', 'lifeExpectancy', 'rentaPerCapita'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: dades | any;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    setTimeout( () => {
      this.state = 'shown';
    }, 0);    
  }

  state = 'hidden';
  
  announceSortChange(sortState: Sort) {
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
  population?: number;
  percPoverty?: number;
  literacyRate15Above?: number;
  access2Electricity?: number;
  lifeExpectancy?:number;
  rentaPerCapita?:number;
  description?: string;
}

const ELEMENT_DATA: dades[] = dades;
