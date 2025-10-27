import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModalOneComponent } from './my-modal-one.component';

describe('MyModalOneComponent', () => {
  let component: MyModalOneComponent;
  let fixture: ComponentFixture<MyModalOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyModalOneComponent]
    });
    fixture = TestBed.createComponent(MyModalOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
