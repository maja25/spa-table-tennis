import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { MatchAddComponent } from './matches/match-add/match-add.component';
import { MatchDetailsComponent } from './matches/match-details/match-details.component';
import { MatchesIntroComponent } from './matches/matches-intro/matches-intro.component';
import { MatchesComponent } from './matches/matches.component';
import { PlayerAddComponent } from './players/player-add/player-add.component';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { PlayersIntroComponent } from './players/players-intro/players-intro.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'players', component: PlayersComponent, children: [
    { path: '', component: PlayersIntroComponent },
    { path: ':id', component: PlayerDetailsComponent },
  ] },
  { path: 'matches', component: MatchesComponent , children: [
    { path: '', component: MatchesIntroComponent },
    { path: ':name', component: MatchDetailsComponent }
  ]},
  { path: 'addPlayer', component: PlayerAddComponent },
  { path: 'addMatch', component: MatchAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
