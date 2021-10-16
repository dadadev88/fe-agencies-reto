import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-bcp-text',
	templateUrl: './bcp-text.component.html',
	styleUrls: ['./bcp-text.component.css']
})
export class BCPTextComponent implements OnInit {

	@Input()
	label: string = '';
	
	@Input()
	isW100: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

}
