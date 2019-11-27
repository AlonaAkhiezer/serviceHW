import { Pipe, PipeTransform } from '@angular/core';
import { IPlace } from 'src/mock/itemsData';

@Pipe({
  name: 'placesFilter'
})
export class PlacesFilterPipe implements PipeTransform {

  transform(places: IPlace[], type: string): IPlace[] {
    if(!type) {
      return places;
    }
    return places.filter((v) => v.type == type);
  }
}
