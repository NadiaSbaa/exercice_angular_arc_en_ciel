import { Personne } from './../../model/personne';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() sendPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

SelectItem(): void{
  this.sendPersonne.emit(
    this.personne
  );
  }

}
