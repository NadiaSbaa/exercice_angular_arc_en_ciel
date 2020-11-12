import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  name = 'sbaa';
  firstname = 'nadia';
  age = 22;
  path = 'nadia.png';
  constructor() { }

  ngOnInit(): void {
  }

}
