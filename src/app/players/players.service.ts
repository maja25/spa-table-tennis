import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayerScores } from '../matches/matches.model';
import { Player } from './player.model';

@Injectable()
export class PlayersService {
  private players: Player[] = [
    new Player('Maja', 'Nekic', '0'),
    new Player('Ana', 'Anic', '1'),
    new Player('Antun', 'Nesto', '2'),
  ];

  private playersSubject = new BehaviorSubject<Player[]>(this.players);
  public players$ = this.playersSubject.asObservable().pipe(map(players => players.sort((a, b) => a.wins - b.wins)));

  getPlayers() {
    return this.players;
  }

  getPlayerWithID(id: string) {
    let player;
    this.players.forEach((playerObject) => {
      if (playerObject.id === id) {
        player = playerObject;
      }
    });
    return player;
  }

  getPlayerWithName(name: string) {
    let player;
    this.players.forEach((playerObject) => {
      if (this.playerMatchesFullName(playerObject, name)) {
        player = playerObject;
      }
    });
    return player;
  }

  getScoresOfPlayerWithID(id: string) {
    let scores;
    this.players.forEach((player) => {
      if (player.id === id) {
        scores = player.scores;
      }
    });
    return scores;
  }

  addPlayer(player: Player) {
    const newPlayers = this.playersSubject.getValue();
    player.setId(newPlayers.length.toString());
    newPlayers.push(player);
    this.playersSubject.next(newPlayers);
  }
  updatePlayers(playersScores: PlayerScores[]) {
    const updatedPlayers = this.playersSubject.getValue().map(player => {
      if (this.playerMatchesFullName(player, playersScores[0].player)) {
        player.updateScores(playersScores[0].scores, playersScores[1].scores)

      }
      else if (this.playerMatchesFullName(player, playersScores[1].player)) {
        player.updateScores(playersScores[1].scores, playersScores[0].scores)
      }
      return player
    })
    this.playersSubject.next(updatedPlayers)

  }

  private playerMatchesFullName(player: Player, scoresPlayer: string | undefined): boolean {
    return player.firstName === scoresPlayer?.split(' ')[0] && player.lastName === scoresPlayer.split(' ')[1]
  }
}