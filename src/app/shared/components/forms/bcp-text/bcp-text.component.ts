import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
	selector: 'app-bcp-text',
	templateUrl: './bcp-text.component.html',
	styleUrls: ['./bcp-text.component.css'],
	viewProviders: [
		{ provide: ControlContainer, useExisting: FormGroupDirective }
	]
})
export class BCPTextComponent implements OnInit {

	@Input()
	label: string = '';
	@Input()
	name: string = '';
	@Input()
	isW100?: boolean = true;

	constructor() { }

	ngOnInit(): void {
	}

}
