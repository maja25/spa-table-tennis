import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.css'],
})
export class SetsComponent implements OnInit {
  @Input() formGroup: FormGroup = new FormGroup({});
  @Input() player: string = '';
  matchSets = [...Array(5)].map((_, index) => `set${index}`);

  ngOnInit(): void {
    this.createControls();
  }
  private createControls() {
    const matchSets: { [key: string]: FormControl } = {};
    for (let i = 0; i < this.matchSets.length; i++) {
      this.formGroup?.addControl(
        `${this.player}_${this.matchSets[i]}`,
        new FormControl()
      );
    }
    return matchSets;
  }
}
