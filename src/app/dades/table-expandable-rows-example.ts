import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
//import dades from '/home/gubabe/Downloads/data.json'
/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'table-expandable-rows-example',
  styleUrls: ['table-expandable-rows-example.css'],
  templateUrl: 'table-expandable-rows-example.html',
})

export class TableExpandableRowsExample {
  //columnas: string[] = ['País', 'Percentatge de Pobresa', 'Any'];
  columnas: string[] = ['codigo', 'descripcion', 'precio'];
  datos: Articulo[] = [new Articulo(1, 'papas', 55),
  new Articulo(2, 'manzanas', 53),
  new Articulo(3, 'naranjas', 25),
  ];

  dataSource: any;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.datos);
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}

export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}