import { Component, Input } from '@angular/core';

@Component({
  selector: 'bcp-button',
  templateUrl: './bcp-button.component.html',
  styleUrls: ['./bcp-button.component.css']
})
export class BCPButtonComponent {

  @Input() text: string = 'Botón';
  @Input() isSubmit?: boolean = false;
  @Input() color: 'primary' | 'secondary' = 'primary';
  @Input() isDisabled: boolean = false;

}
