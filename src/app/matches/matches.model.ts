import { Player, Scores } from '../players/player.model';

export class Match {
  public name: string;
  public firstPlayer: Player;
  public secondPlayer: Player;

  constructor(name: string, firstPlayer: Player, secondPlayer: Player) {
    this.name = name;
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
  }
}
export class PlayerScores {
  player?: string;
  scores?: Scores;
  constructor(player: string, scores: Scores) {
    this.player = player;
    this.scores = scores;
  }
}
