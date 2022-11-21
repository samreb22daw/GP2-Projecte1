import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css'],
  animations: [
    trigger("animacioForm", [
      state('hidden', style({
        transform: 'scale(30%)', opacity:0})
      ), state('shown', style({
        transform: 'scale(100%)', opacity: 1})
      ), transition('hidden => shown', [
        animate('0.4s')
      ]),
    ])
  ]  
})
export class FormulariComponent implements OnInit {
  state = 'hidden';

  constructor() { }

  ngAfterViewInit() {
    setTimeout( () => {
      this.state = 'shown';
    }, 0);    
  }

  ngOnInit(): void {
  }

}
