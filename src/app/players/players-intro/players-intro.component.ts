import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../player.model';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players-intro',
  templateUrl: './players-intro.component.html',
  styleUrls: ['./players-intro.component.css']
})
export class PlayersIntroComponent {

  players$: Observable<Player[]> = this.playersService.players$;

  constructor(private playersService: PlayersService) { this.sortPlayers() }

  sortPlayers() {
    console.log(this.players$);
    this.players$.forEach((playerObject) => {
      playerObject.forEach((player) => {
        const nesto = player.wins.sort((a, b) => a - b)
        console.log('player ',nesto);
      })
    })
  
  }

  }



