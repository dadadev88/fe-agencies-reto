import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BCPLoadingComponent } from './bcp-loading.component';

describe('BCPLoadingComponent', () => {
  let component: BCPLoadingComponent;
  let fixture: ComponentFixture<BCPLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BCPLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BCPLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
