import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Player } from '../player.model';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  player: Player = <Player>{ };
  id: string = '-1';
  scores: number[] = [];

  constructor(private ps: PlayersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => { 
      this.id = String(+params['id']);
       this.player = this.ps.getPlayerWithID(this.id)!;
      this.scores = this.ps.getScoresOfPlayerWithID(this.id)!;
    });
  }
}
