import { Personne } from './../cv/model/personne';
import { Injectable } from '@angular/core';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  embauches: Personne[] = [];
  constructor() { }

  addEmbauche(personne: Personne): number{
    if (this.embauches.indexOf(personne) === -1 ){
      this.embauches.push(personne);
      return 1;
    }
    return -1;
  }

  getEmbauches(): Personne[]{
    return this.embauches;
  }
}
