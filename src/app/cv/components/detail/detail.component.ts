import { CvService } from './../../../services/cv.service';
import { Personne } from './../../model/personne';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  personnesEmbauches: Personne[] = [];
  @Output() personnesEmbauchesEnvoyee = new EventEmitter();
  constructor(private cvService: CvService) { }

  ngOnInit(): void {
  }

  embaucher(): void{
    if (this.cvService.addEmbauche(this.personne) === 1){
    this.personnesEmbauches = this.cvService.getEmbauches();
    this.personnesEmbauchesEnvoyee.emit(this.personnesEmbauches);
  }
  else{
    alert('Candidate is already hired');
  }
  }

}
