import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Match } from './matches.model';

@Injectable()
export class MatchesService {
  private matchesSubject = new BehaviorSubject<Match[] | null>(null);
  public matches$ = this.matchesSubject.asObservable();

  getMatchWithName(name: string) {
    let match;
    let newMatches = this.matchesSubject.getValue();
    newMatches?.forEach((matchObject) => {
      if (matchObject.name === name) {
        match = matchObject;
      }
    });
    return match;
  }

  addMatch(match: Match) {
    let newMatches = this.matchesSubject.getValue();
    if (newMatches) {
      newMatches.push(match);
    } else {
      newMatches = [match];
    }
    this.matchesSubject.next(newMatches);
  }
}
