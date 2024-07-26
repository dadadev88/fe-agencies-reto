import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BCPButtonComponent } from './bcp-button.component';

describe('BCPButtonComponent', () => {
  let component: BCPButtonComponent;
  let fixture: ComponentFixture<BCPButtonComponent>;
  let buttonElement: HTMLButtonElement;

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
    buttonElement = fixture.debugElement.query(By.css('button')).nativeElement;
  });

  it('shouldd create', () => {
    expect(component).toBeTruthy();
  });

  it('should render primary color by default', () => {
    expect(buttonElement).toHaveClass('bcp-button');
    expect(buttonElement).toHaveClass('bcp-button--primary');
    expect(buttonElement.disabled).toBe(false);
  });

  it('should render secondary color when "color" param is "secondary"', () => {
    component.color = 'secondary';
    fixture.detectChanges();
    expect(buttonElement).toHaveClass('bcp-button--secondary');
  });

  it('should disable button when "isDisabled" param is "true"', () => {
    component.isDisabled = true;
    fixture.detectChanges();
    expect(buttonElement.disabled).toBe(true);
  });

  it('should show text button with based in "text" param', () => {
    component.text = "Nombre";
    fixture.detectChanges();
    expect(buttonElement.innerText).toBe("Nombre");
  });
});
