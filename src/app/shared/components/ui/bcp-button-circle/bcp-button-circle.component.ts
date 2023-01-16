import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'bcp-button-circle',
	templateUrl: './bcp-button-circle.component.html',
	styleUrls: ['./bcp-button-circle.component.css']
})
export class BCPButtonCircleComponent {

	@Input() icon: string = '+'

	@Output() click: EventEmitter<MouseEvent> = new EventEmitter();

	onClick(e: MouseEvent) {
		this.click.emit(e);
	}

}
