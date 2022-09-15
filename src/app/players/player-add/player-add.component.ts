import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player.model';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css'],
})
export class PlayerAddComponent implements OnInit {
  playerForm: FormGroup;
  id: number = -1;

  constructor(
    private route: ActivatedRoute,
    private playersService: PlayersService,
    private router: Router
  ) {
    let firstName = '';
    let lastName = '';

    this.playerForm = new FormGroup({
      firstName: new FormControl(firstName, Validators.required),
      lastName: new FormControl(lastName, Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const newPlayer = new Player(
      this.playerForm.value['firstName'],
      this.playerForm.value['lastName']
    );
    this.playersService.addPlayer(newPlayer);
    this.navigateToList();
  }

  navigateToList() {
    this.router.navigate(['../players'], { relativeTo: this.route });
  }
}
