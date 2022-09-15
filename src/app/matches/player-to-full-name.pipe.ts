import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../players/player.model';

@Pipe({
  name: 'playerToFullName'
})
export class PlayerToFullNamePipe implements PipeTransform {

  transform(value: Player[] | null): string[] {
    return value?.map(player => {
      return `${ player.firstName } ${ player.lastName}`
    }) || [];
  }

}
