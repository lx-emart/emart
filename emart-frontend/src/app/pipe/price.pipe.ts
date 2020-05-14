import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: number, floats?: number): unknown {
    return value.toFixed(isNaN(floats) ? 2 : floats);
  }
}
