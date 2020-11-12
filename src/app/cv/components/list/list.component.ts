import { Personne } from './../../model/personne';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public personnes: Personne[] = [];
  @Output() forwardSelectedPersonne = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.personnes = [
      new Personne(1, 'sbaa', 'nadia', 'student', 'nadia.jpg', 11111, 22),
      new Personne(2, 'sbaa2', 'nadia2', 'student2', '', 11117, 23)
    ];
  }
  forwardPersonne(selectedPersonne: Personne): void{
    this.forwardSelectedPersonne.emit(
      selectedPersonne
    );
  }

}
