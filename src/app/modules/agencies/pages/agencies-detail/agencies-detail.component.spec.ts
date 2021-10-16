import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesDetailPageComponent } from './agencies-detail.component';

describe('AgenciesDetailPageComponent', () => {
  let component: AgenciesDetailPageComponent;
  let fixture: ComponentFixture<AgenciesDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenciesDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenciesDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
