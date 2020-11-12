import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(pathImage: string): string {
    if (pathImage.length === 0){
      return 'bus.jpg';
    }
    else{
    return pathImage;
    }
  }

}
