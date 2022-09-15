import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Player } from 'src/app/players/player.model';
import { PlayersService } from 'src/app/players/players.service';
import { Match } from '../matches.model';
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
  players$: Observable<Player[]> = this.playersService.players$;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matchesService: MatchesService,
    private playersService: PlayersService
  ) {
    let matchName = '';
    let firstPlayer = '';
    let secondPlayer = '';
    let p1s1 = '';
    let p2s1 = '';
    let p1s2 = '';
    let p2s2 = '';
    let p1s3 = '';
    let p2s3 = '';

    this.matchesForm = new FormGroup({
      name: new FormControl(matchName, Validators.required),
      firstPlayer: new FormControl(firstPlayer),
      secondPlayer: new FormControl(secondPlayer),
    });
  }

  onSubmit() {
    const newMatch = new Match(
      this.matchesForm.value['name'],
      this.matchesForm.value['firstPlayer'],
      this.matchesForm.value['secondPlayer']
    );
    this.matchesService.addMatch(newMatch);
    console.log(newMatch);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../matches'], { relativeTo: this.route });
  }
}
