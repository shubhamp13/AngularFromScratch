import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom',
  standalone: true
})
export class CustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if (value != null && value != '' && value != undefined) {
      return value;
    }
    else {
      return "Not Applicable";
    }
  }

}
