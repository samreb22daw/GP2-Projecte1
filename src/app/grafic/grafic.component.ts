import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import dadesContinents from '../../assets/dades/continents.json';
import dadesPaisosRics from '../../assets/dades/PaisosRics.json';

var jsonfile = dadesContinents;
var jsonfile2 = dadesPaisosRics;

// Retornem les dades del json de continents

var pobresa: any = jsonfile.map(function (e) {
  return e.percPoverty;
});

var accesElectricitat: any = jsonfile.map(function (e) {
  return e.access2Electricity;
});

var alfabetitzacio: any = jsonfile.map(function (e) {
  return e.literacyRate;
});

var esperanca: any = jsonfile.map(function (e) {
  return e.lifeExpectancy;
});

// Retornem les dades del json de països més rics

var pobresa2: any = jsonfile2.map(function (a) {
  return a.percPoverty.toFixed(2);
});

var accesElectricitat2: any = jsonfile2.map(function (a) {
  return Math.trunc(a.access2Electricity);
});

var alfabetitzacio2: any = jsonfile2.map(function (a) {
  return Math.trunc(a.literacyRate);
});

var esperanca2: any = jsonfile2.map(function (a) {
  return a.lifeExpectancy.toFixed(2);
});

var atur: any = jsonfile2.map(function (a) {
  return a.unemployment;
});


@Component({
  selector: 'app-grafic',
  templateUrl: './grafic.component.html',
  styleUrls: ['./grafic.component.css']
})

export class GraficComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.4
      }
    },
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0,
        max: 120
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public chartColors: any[] = [
    { 
      backgroundColor:["#FF7360", "#6FC8CE", "#FAFFF2", "#FFFCC4"]
  }];

  public barChartData: ChartData<'bar'> = {
    labels: ['Europa', 'Àfrica', 'Àsia', 'Amèrica del Nord', 'Amèrica del Sud', 'Oceania'],
    datasets: [
      { data: [accesElectricitat[0], accesElectricitat[1], accesElectricitat[2], accesElectricitat[3], accesElectricitat[4], accesElectricitat[5]], label: "Accés a electricitat (%)", backgroundColor: ["#ff6961"] },
      { data: [alfabetitzacio[0], alfabetitzacio[1], alfabetitzacio[2], alfabetitzacio[3], alfabetitzacio[4], alfabetitzacio[5]], label: "Taxa d'alfabetització (%)", backgroundColor: ["#dcd9f8"] },
      { data: [pobresa[0], pobresa[1], pobresa[2], pobresa[3], pobresa[4], pobresa[5]], label: "Taxa de pobresa (%)", backgroundColor: ["#fdfd96"] },
      { data: [esperanca[0], esperanca[1], esperanca[2], esperanca[3], esperanca[4], esperanca[5]], label: "Esperança de vida (anys)",backgroundColor: ["#84b6f4"] },
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

  public barChartData2: ChartData<'bar'> = {
    labels: ['Azerbaijan', 'República Checa', 'Islandia', 'Finlàndia', 'Eslovaquia'],
    datasets: [
      { data: [accesElectricitat2[0], accesElectricitat2[1], accesElectricitat2[2], accesElectricitat2[3], accesElectricitat2[4]], label: "Accés a electricitat (%)", backgroundColor: ["#ff6961"] },
      { data: [alfabetitzacio2[0], alfabetitzacio2[1], alfabetitzacio2[2], alfabetitzacio2[3], alfabetitzacio2[4]], label: "Taxa d'alfabetització (%)", backgroundColor: ["#dcd9f8"] },
      { data: [pobresa2[0], pobresa2[1], pobresa2[2], pobresa2[3], pobresa2[4]], label: "Taxa de pobresa (%)", backgroundColor: ["#fdfd96"] },
      { data: [esperanca2[0], esperanca2[1], esperanca2[2], esperanca2[3], esperanca2[4]], label: "Esperança de vida  (anys)",backgroundColor: ["#84b6f4"] },
      { data: [atur[0], atur[1], atur[2], atur[3], atur[4]], label: "Taxa d'atur (%)", backgroundColor: ["#fdcae1"] },
    ]
  };

  public barChartData3: ChartData<'bar'> = {
    labels: ['Marroc', 'Argèlia', 'Mauritània', 'Tunísia', 'Namíbia'],
    datasets: [
      { data: [accesElectricitat2[5], accesElectricitat2[6], accesElectricitat2[7], accesElectricitat2[8], accesElectricitat2[9]], label: "Accés a electricitat (%)", backgroundColor: ["#ff6961"] },
      { data: [alfabetitzacio2[5], alfabetitzacio2[6], alfabetitzacio2[7], alfabetitzacio2[8], alfabetitzacio2[9]], label: "Taxa d'alfabetització (%)", backgroundColor: ["#dcd9f8"] },
      { data: [pobresa2[5], pobresa2[6], pobresa2[7], pobresa2[8], pobresa2[9]], label: "Taxa de pobresa (%)", backgroundColor: ["#fdfd96"] },
      { data: [esperanca2[5], esperanca2[6], esperanca2[7], esperanca2[8], esperanca2[9]], label: "Esperança de vida (anys)", backgroundColor: ["#84b6f4"] },
      { data: [atur[5], atur[6], atur[7], atur[8], atur[9]], label: "Taxa d'atur (%)", backgroundColor: ["#fdcae1"] },
    ]
  };  
}