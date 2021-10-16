import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyListItemComponent } from './agency-list-item.component';

describe('AgencyListItemComponent', () => {
  let component: AgencyListItemComponent;
  let fixture: ComponentFixture<AgencyListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
