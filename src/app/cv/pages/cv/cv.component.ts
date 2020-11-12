import { Personne } from './../../model/personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  constructor() { }

  ngOnInit(): void {
  }

  catchSelectedPersonne(forwardedPersonne: Personne): void{
    this.selectedPersonne = forwardedPersonne;
  }
}
