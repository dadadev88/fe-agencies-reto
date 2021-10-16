import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCPTextComponent } from './bcp-text.component';

describe('BCPTextComponent', () => {
  let component: BCPTextComponent;
  let fixture: ComponentFixture<BCPTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCPTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BCPTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
