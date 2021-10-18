import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCPButtonCircleComponent } from './bcp-button-circle.component';

describe('BCPButtonCircleComponent', () => {
  let component: BCPButtonCircleComponent;
  let fixture: ComponentFixture<BCPButtonCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCPButtonCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BCPButtonCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
