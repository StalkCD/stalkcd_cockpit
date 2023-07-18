import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toSeconds'
})
export class ToSecondsPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    var seconds = value / 1000;
    
    return seconds.toFixed(2);
  }

}
