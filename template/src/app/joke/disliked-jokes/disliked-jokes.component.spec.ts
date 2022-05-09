import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikedJokesComponent } from './disliked-jokes.component';

describe('DislikedJokesComponent', () => {
  let component: DislikedJokesComponent;
  let fixture: ComponentFixture<DislikedJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislikedJokesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikedJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
