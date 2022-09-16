import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excludePlayer'
})
export class ExcludePlayerPipe implements PipeTransform {

  transform(value: string[], exclude: string): string[] {
    return value.filter((player) => player !== exclude);
  }

}
