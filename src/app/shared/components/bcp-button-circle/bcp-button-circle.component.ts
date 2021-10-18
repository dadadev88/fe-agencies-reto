import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-bcp-button-circle',
	templateUrl: './bcp-button-circle.component.html',
	styleUrls: ['./bcp-button-circle.component.css']
})
export class BCPButtonCircleComponent {

	@Input() icon: string = '+'

	@Output() click: EventEmitter<MouseEvent> = new EventEmitter();

	constructor() { }

	onClick(e: MouseEvent) {
		this.click.emit(e);
	}

}
