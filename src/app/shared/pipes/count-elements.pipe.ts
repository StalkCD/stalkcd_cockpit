import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countElements'
})
export class CountElementsPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): number {
    var count = value.length;
    return count;
  }

}