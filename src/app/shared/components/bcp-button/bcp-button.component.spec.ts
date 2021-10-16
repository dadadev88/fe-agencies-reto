import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCPButtonComponent } from './bcp-button.component';

describe('BCPButtonComponent', () => {
  let component: BCPButtonComponent;
  let fixture: ComponentFixture<BCPButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCPButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BCPButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
