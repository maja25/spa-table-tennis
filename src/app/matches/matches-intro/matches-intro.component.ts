import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../matches.model';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-matches-intro',
  templateUrl: './matches-intro.component.html',
  styleUrls: ['./matches-intro.component.css']
})
export class MatchesIntroComponent implements OnInit {

  matches$: Observable<Match[] | null> = this.matchesService.matches$;
  noItems: boolean = false;

  constructor(private matchesService: MatchesService) { }

  ngOnInit(): void {
   this.matches$.subscribe(match => { if (!match?.length) { this.noItems = !this.noItems }})
  }

}
