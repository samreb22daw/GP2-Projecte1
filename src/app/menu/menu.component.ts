import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger("animacioMenu", [
      state('hidden', style({
        transform: 'translateX(0%)', opacity:0})
      ), state('shown', style({
        transform: 'translateX(100%)', opacity: 1})
      ), transition('hidden => shown', [
        animate('0.3s')
      ]),
    ])
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  state = 'hidden';

  ngAfterViewInit() {
    setTimeout( () => {
      this.state = 'shown';
    }, 500);
  }

  isActive = false;
}

