import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedJokesComponent } from './liked-jokes.component';

describe('LikedJokesComponent', () => {
  let component: LikedJokesComponent;
  let fixture: ComponentFixture<LikedJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
