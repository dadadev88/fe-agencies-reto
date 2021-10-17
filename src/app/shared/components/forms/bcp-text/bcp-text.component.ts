import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
	selector: 'app-bcp-text',
	templateUrl: './bcp-text.component.html',
	styleUrls: ['./bcp-text.component.css'],
	viewProviders: [
		{ provide: ControlContainer, useExisting: FormGroupDirective }
	]
})
export class BCPTextComponent {

	@Input() label: string = '';
	@Input() name: string = '';
	@Input() isW100?: boolean = true;
	@Input() placeholder: string = '';
	@Input() hasFG: boolean = true;
	@Input() addBM: boolean = true;

	@Output() keyupEmmiter: EventEmitter<string> = new EventEmitter<string>();

	onKeyup(e: KeyboardEvent) {
		const input = e.target as HTMLInputElement;
		this.keyupEmmiter.emit(input.value);
	}

}
