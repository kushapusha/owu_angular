import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertPipe'
})
export class ConvertPipePipe implements PipeTransform {

  transform(value: number, arg: number): any {
    return +(value/arg).toFixed(2) + '$';
  }

}
