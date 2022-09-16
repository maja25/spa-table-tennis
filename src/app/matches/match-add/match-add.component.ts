import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Player, Scores } from 'src/app/players/player.model';
import { PlayersService } from 'src/app/players/players.service';
import { Match, PlayerScores } from '../matches.model';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-match-add',
  templateUrl: './match-add.component.html',
  styleUrls: ['./match-add.component.css'],
})
export class MatchAddComponent {
  matchesForm: FormGroup;
  id: number = -1;
  public sets: number = 5;
  players$: Observable<Player[] | null> = this.playersService.players$;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matchesService: MatchesService,
    private playersService: PlayersService
  ) {
    let matchName = '';
    let firstPlayer = '';
    let secondPlayer = '';

    this.matchesForm = new FormGroup({
      name: new FormControl(matchName, Validators.required),
      firstPlayer: new FormControl(firstPlayer),
      secondPlayer: new FormControl(secondPlayer),
    });
  }

  onSubmit(form: FormGroup) {
    const newMatch = new Match(
      form.get('name')?.value,
      form.get('firstPlayer')?.value,
      form.get('secondPlayer')?.value
    );
    this.matchesService.addMatch(newMatch);
    const scores = this.getScores(newMatch.name, form);
    this.playersService.updatePlayers(scores);
    this.navigateToList();
  }

  navigateToList() {
    this.router.navigate(['../matches'], { relativeTo: this.route });
  }

  private getScores(matchName: string, form: FormGroup) {
    const player1Scores: Scores = {
      matchName: matchName,
      sets: this.getScoresFor(1, form),
    };
    const player2Scores: Scores = {
      matchName: matchName,
      sets: this.getScoresFor(2, form),
    };
    return [
      new PlayerScores(form.get('firstPlayer')?.value, player1Scores),
      new PlayerScores(form.get('secondPlayer')?.value, player2Scores),
    ];
  }

  private getScoresFor(player: number, form: FormGroup): number[] {
    const scores = [];
    for (let i = 0; i < this.sets; i++) {
      scores.push(form.get(`player${player}_set${i}`)?.value);
    }
    return scores;
  }
}
