import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  animations: [
    trigger("animacioBanner", [
      state('hidden', style({
        transform: 'translateY(0%)', opacity:0})
      ), state('shown', style({
        transform: 'translateY(100%)', opacity: 1})
      ), transition('hidden => shown', [
        animate('1s')
      ]),
    ])
  ]
})
export class PrincipalComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  state = 'hidden';

  ngAfterViewInit() {
    setTimeout( () => {
      this.state = 'shown';
    }, 1000);
  }

}
