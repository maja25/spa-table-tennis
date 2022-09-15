import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from '../matches.model';
import { MatchesService } from '../matches.service';

@Component({
  selector: 'app-matches-intro',
  templateUrl: './matches-intro.component.html',
  styleUrls: ['./matches-intro.component.css']
})
export class MatchesIntroComponent {

  matches$: Observable<Match[] | null> = this.matchesService.matches$;
  
  constructor(private matchesService: MatchesService) { }


}
