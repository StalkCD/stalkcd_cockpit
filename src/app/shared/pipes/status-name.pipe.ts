import { Pipe, PipeTransform } from '@angular/core';
import { isEmpty } from 'rxjs';

@Pipe({
  name: 'statusName'
})
export class StatusNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    var result = "";
    if(value === null || value === undefined || value === ""){
      result = "null"
    }else{
      result = value;
    }
    return result;
  }

}