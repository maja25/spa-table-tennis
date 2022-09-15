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
  players: Player[] = [];

  constructor(
    private route: ActivatedRoute,
    private ps: PlayersService,
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
      this.playerForm.value['lastName'],
      this.generateGuid(),
      { firstSet: [], secondSet: [], thirdSet: [], fourthSet: [], fiftSet: [] },
      []
    );
    this.ps.addPlayer(newPlayer);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../players'], { relativeTo: this.route });
  }

  generateGuid(): string {
    return 'x'.replace(/[x]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      console.log('guid ', v);
      return v.toString(16);
    });
  }
}
