import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Player } from 'src/app/players/player.model';
import { PlayersService } from 'src/app/players/players.service';
import { Match } from '../matches.model';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css'],
})
export class MatchDetailsComponent implements OnInit {
  name: string = '';
  match: Match = <Match>{};
  player1: Player = <Player>{};
  player2: Player = <Player>{};

  constructor(
    private route: ActivatedRoute,
    private matchesService: MatchesService,
    private playersService: PlayersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.name = String(params['name']);
      this.match = this.matchesService.getMatchWithName(this.name)!;
      this.player1 = this.playersService.getPlayerWithName(
        String(this.match.firstPlayer)
      )!;
      this.player2 = this.playersService.getPlayerWithName(
        String(this.match.secondPlayer)
      )!;
    });
  }
}
