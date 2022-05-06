import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentJokeComponent } from './current-joke.component';

describe('CurrentJokeComponent', () => {
  let component: CurrentJokeComponent;
  let fixture: ComponentFixture<CurrentJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
