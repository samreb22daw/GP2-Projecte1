import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import dadesContinents from '../../assets/dades/continents.json';

var jsonfile = dadesContinents;

var continent: any = jsonfile.map(function (e) {
  return e.continent;
});

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

let poblacio: any;

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

  public barChartData: ChartData<'bar'> = {
    labels: ['Europa', 'Àfrica', 'Àsia', 'Amèrica del Nord', 'Amèrica del Sud', 'Oceania'],
    datasets: [
      { data: [accesElectricitat[0], accesElectricitat[1], accesElectricitat[2], accesElectricitat[3], accesElectricitat[4], accesElectricitat[5]], label: "Accés a electricitat" },
      { data: [alfabetitzacio[0], alfabetitzacio[1], alfabetitzacio[2], alfabetitzacio[3], alfabetitzacio[4], alfabetitzacio[5]], label: "Tasa d'alfabetització" },
      { data: [pobresa[0], pobresa[1], pobresa[2], pobresa[3], pobresa[4], pobresa[5]], label: "Tasa de pobresa" },
      { data: [esperanca[0], esperanca[1], esperanca[2], esperanca[3], esperanca[4], esperanca[5]], label: "Esperança de vida" },
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
    labels: ['Europa', 'Àfrica', 'Àsia', 'Amèrica del Nord', 'Amèrica del Sud', 'Oceania'],
    datasets: [
      { data: [1, 2, accesElectricitat[2], accesElectricitat[3], accesElectricitat[4], accesElectricitat[5]], label: "Accés a electricitat" },
      { data: [alfabetitzacio[0], alfabetitzacio[1], alfabetitzacio[2], alfabetitzacio[3], alfabetitzacio[4], alfabetitzacio[5]], label: "Tasa d'alfabetització" },
      { data: [pobresa[0], pobresa[1], pobresa[2], pobresa[3], pobresa[4], pobresa[5]], label: "Tasa de pobresa" },
      { data: [esperanca[0], esperanca[1], esperanca[2], esperanca[3], esperanca[4], esperanca[5]], label: "Esperança de vida" },
    ]
  };
}

@Component({
  selector: 'app-grafic',
  templateUrl: './grafic.component.html',
  styleUrls: ['./grafic.component.css']
})

export class Grafic2Component {
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

  public barChartData: ChartData<'bar'> = {
    labels: ['Europa', 'Àfrica', 'Àsia', 'Amèrica del Nord', 'Amèrica del Sud', 'Oceania'],
    datasets: [
      { data: [accesElectricitat[0], accesElectricitat[1], accesElectricitat[2], accesElectricitat[3], accesElectricitat[4], accesElectricitat[5]], label: "Accés a electricitat" },
      { data: [alfabetitzacio[0], alfabetitzacio[1], alfabetitzacio[2], alfabetitzacio[3], alfabetitzacio[4], alfabetitzacio[5]], label: "Tasa d'alfabetització" },
      { data: [pobresa[0], pobresa[1], pobresa[2], pobresa[3], pobresa[4], pobresa[5]], label: "Tasa de pobresa" },
      { data: [esperanca[0], esperanca[1], esperanca[2], esperanca[3], esperanca[4], esperanca[5]], label: "Esperança de vida" },
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
}