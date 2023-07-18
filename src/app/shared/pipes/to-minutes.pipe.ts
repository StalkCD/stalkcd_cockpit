import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMinutes'
})
export class ToMinutesPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    var minutes = Math.floor(value / 60000);
    var seconds = ((value % 60000) / 1000);

    return (
      seconds == 60 ?
      (minutes+1) + ":00" :
      minutes + ":" + (seconds < 10 ? "0" : "") + seconds.toFixed(0)
    );  
  }
}
