import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesListPageComponent } from './agencies-list.component';

describe('AgenciesListPageComponent', () => {
  let component: AgenciesListPageComponent;
  let fixture: ComponentFixture<AgenciesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciesListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
