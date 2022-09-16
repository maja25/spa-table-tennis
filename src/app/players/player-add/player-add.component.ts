import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from '../player.model';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css'],
})
export class PlayerAddComponent {
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

  onSubmit(form: FormGroup) {
    const newPlayer = new Player(
      form.get('firstName')?.value,
      form.get('lastName')?.value
    );
    this.playersService.addPlayer(newPlayer);
    this.navigateToList();
  }

  navigateToList() {
    this.router.navigate(['../players'], { relativeTo: this.route });
  }
}
