import { Pipe, PipeTransform } from '@angular/core';
const DEFAULT_IMAGE = 'bus.jpg';
@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(pathImage: string): string {
    if (pathImage.trim().length === 0){
      return DEFAULT_IMAGE;
    }
    else{
    return pathImage;
    }
  }

}
