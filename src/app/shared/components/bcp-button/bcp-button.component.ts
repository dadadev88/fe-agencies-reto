import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-bcp-button',
	templateUrl: './bcp-button.component.html',
	styleUrls: ['./bcp-button.component.css']
})
export class BCPButtonComponent {

	@Input() text: string = 'Botón';
	@Input() isSubmit?: boolean = true;
	@Input() style: 'primary' | 'secondary' = 'primary';
	@Input() isDisabled: boolean = false;

	constructor() { }
}
