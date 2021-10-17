import { Component, Input } from '@angular/core';
import { BCPHeaderOptions } from '../../interfaces/bcp-header.interface';

@Component({
	selector: 'app-bcp-header',
	templateUrl: './bcp-header.component.html',
	styleUrls: ['./bcp-header.component.css']
})
export class BCPHeaderComponent {

	@Input()
	options: BCPHeaderOptions[] = [];
	
}
