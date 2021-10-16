import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-bcp-button',
	templateUrl: './bcp-button.component.html',
	styleUrls: ['./bcp-button.component.css']
})
export class BCPButtonComponent implements OnInit {

	@Input()
	text: string = 'Botón';
	@Input()
	style: 'primary' | 'secondary' = 'primary';

	constructor() { }

	ngOnInit(): void {
	}

}
