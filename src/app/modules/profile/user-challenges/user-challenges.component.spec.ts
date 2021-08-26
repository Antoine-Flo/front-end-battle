import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChallengesComponent } from './user-challenges.component';

describe('UserChallengesComponent', () => {
  let component: UserChallengesComponent;
  let fixture: ComponentFixture<UserChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChallengesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
