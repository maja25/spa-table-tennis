import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersIntroComponent } from './players-intro.component';

describe('PlayersIntroComponent', () => {
  let component: PlayersIntroComponent;
  let fixture: ComponentFixture<PlayersIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
