import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcpButtonCircleComponent } from './bcp-button-circle.component';

describe('BcpButtonCircleComponent', () => {
  let component: BcpButtonCircleComponent;
  let fixture: ComponentFixture<BcpButtonCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BcpButtonCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BcpButtonCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
