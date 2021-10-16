import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesFavoritesPageComponent } from './agencies-favorites.component';

describe('AgenciesFavoritesPageComponent', () => {
  let component: AgenciesFavoritesPageComponent;
  let fixture: ComponentFixture<AgenciesFavoritesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciesFavoritesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesFavoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
