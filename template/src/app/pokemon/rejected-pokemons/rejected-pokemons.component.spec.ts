import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedPokemonsComponent } from './rejected-pokemons.component';

describe('RejectedPokemonsComponent', () => {
  let component: RejectedPokemonsComponent;
  let fixture: ComponentFixture<RejectedPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedPokemonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
