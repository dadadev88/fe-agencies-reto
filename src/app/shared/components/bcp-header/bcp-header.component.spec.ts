import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCPHeaderComponent } from './bcp-header.component';

describe('HeaderComponent', () => {
  let component: BCPHeaderComponent;
  let fixture: ComponentFixture<BCPHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCPHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BCPHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
