import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appArcEnCiel]'
})
export class ArcEnCielDirective {

  constructor() { }
  @HostBinding('style.color') c = 'black';
  @HostBinding('style.borderColor') bc = 'black';
  @HostBinding('style.borderWidth') bw = 'thick';
  colors: string[];
  @HostListener('keydown') onKeyDown(): void{
    this.c = this.colors[Math.floor(Math.random() * 50) + 1] ;
    this.bc = this.colors[Math.floor(Math.random() * 50) + 1] ;
  }

  getRandomColor(): string{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  appendToColors(): void{
    for (let i = 0; i < 50; i++) {
      this.colors.push(this.getRandomColor());
    }
  }
  ngOnInit(): any{
    this.colors = [];
    this.appendToColors();
  }

}
