import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesIntroComponent } from './matches-intro.component';

describe('MatchesIntroComponent', () => {
  let component: MatchesIntroComponent;
  let fixture: ComponentFixture<MatchesIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchesIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchesIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
