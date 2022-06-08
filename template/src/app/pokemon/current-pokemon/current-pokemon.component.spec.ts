import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPokemonComponent } from './current-pokemon.component';

describe('CurrentPokemonComponent', () => {
  let component: CurrentPokemonComponent;
  let fixture: ComponentFixture<CurrentPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
