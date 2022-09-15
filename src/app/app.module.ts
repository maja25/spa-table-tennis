import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayerAddComponent } from './players/player-add/player-add.component';
import { HeaderComponent } from './header/header.component';
import { MatchesComponent } from './matches/matches.component';
import { IntroComponent } from './intro/intro.component';
import { PlayerDetailsComponent } from './players/player-details/player-details.component';
import { PlayersIntroComponent } from './players/players-intro/players-intro.component';
import { PlayersService } from './players/players.service';
import { MatchesIntroComponent } from './matches/matches-intro/matches-intro.component';
import { MatchDetailsComponent } from './matches/match-details/match-details.component';
import { MatchAddComponent } from './matches/match-add/match-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PlayerToFullNamePipe } from './matches/player-to-full-name.pipe';
import { SetsComponent } from './matches/sets/sets.component';
import { MatchesService } from './matches/matches.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerAddComponent,
    HeaderComponent,
    MatchesComponent,
    IntroComponent,
    PlayerDetailsComponent,
    PlayersIntroComponent,
    MatchesIntroComponent,
    MatchDetailsComponent,
    MatchAddComponent,
    PlayerToFullNamePipe,
    SetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatAutocompleteModule
  ],
  providers: [PlayersService, MatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
