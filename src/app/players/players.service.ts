import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Player } from './player.model';

@Injectable()
export class PlayersService {
  private players: Player[] = [
    new Player('Maja', 'Nekic', '0', {firstSet: [0,1,2,3,4], secondSet: [5,6,7,8,10], thirdSet: [0,1,2,3,4], fourthSet: [5,6,7,8,10], fiftSet: [0,1,2,3,4]}, [0,1,0,1,1]),
    new Player('Ana', 'Anic', '4', {firstSet: [0,1,2,3,4], secondSet: [5,6,7,8,10], thirdSet: [0,1,2,3,4], fourthSet: [5,6,7,8,10], fiftSet: [0,1,2,3,4]}, [1,1,1,1,1]),
    new Player('Antun', 'Nesto', '5', {firstSet: [0,1,2,3,4], secondSet: [5,6,7,8,10], thirdSet: [0,1,2,3,4], fourthSet: [5,6,7,8,10], fiftSet: [0,1,2,3,4]}, [0,0,0,0,1]),
  ];

  private playersSubject = new BehaviorSubject<Player[]>(this.players);
  public players$ = this.playersSubject.asObservable();

  getPlayers() {
    return this.players;
  }

  getPlayerWithID(id: string) {
    let tempPlayer;
    this.players.forEach((player) => {
      if (player.id === id) {
        tempPlayer = player;
      }
    });
    return tempPlayer;
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
    newPlayers.push(player);
    this.playersSubject.next(newPlayers);
  }
}
