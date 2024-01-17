import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityFormat'
})
export class QuantityFormatPipe implements PipeTransform {

  transform(value: number, ...args: string[]): unknown {
    if (value > 0) {
      return null;
    } else {
      return value + ' ' + args[0];
    }
  }

}
