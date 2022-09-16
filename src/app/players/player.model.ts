export interface Scores {
  matchName: string;
  sets: number[];
  won?: boolean;
}

export class Player {
  public firstName: string;
  public lastName: string;
  public id: string;
  public scores?: Scores;
  public wins: number = 0;
  public setId(id: string) {
    this.id = id;
  }

  constructor(firstName: string, lastName: string, id?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id ? id : '';
  }

  updateScores(scores: Scores | undefined, scores2: Scores | undefined) {
    this.scores = scores;
    this.updateWins(scores?.sets, scores2?.sets);
  }
  
  private updateWins(
    scores: number[] | undefined,
    player2Scores: number[] | undefined
  ) {
    if (!scores || !player2Scores) {
      throw new Error('Scores not defined');
    }
    if (this.scores) {
      this.scores.won = this.playerWon(scores, player2Scores);
    }
    this.wins = this.scores?.won ? this.wins + 1 : (this.wins || 1) - 1;
  }

  private isHigherScore(score: number, score2: number) {
    return score >= 11 && score2 < score;
  }

  public playerWon(scores: number[], player2Scores: number[]): boolean {
    let player1Wins = 0;
    let player2Wins = 0;
    scores.forEach((set, index) => {
      if (this.isHigherScore(set, player2Scores[index])) {
        player1Wins += 1;
      } else if (this.isHigherScore(player2Scores[index], set)) {
        player2Wins += 1;
      }
    });
    return player1Wins >= 3 && player1Wins > player2Wins;
  }
}
