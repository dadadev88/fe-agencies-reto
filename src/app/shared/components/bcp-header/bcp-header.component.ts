import { Component, Input } from '@angular/core';
import { AgenciesController } from 'src/app/modules/agencies/controllers/agencies.controller';
import { BCPHeaderOptions } from '../../interfaces/bcp-header.interface';

@Component({
	selector: 'app-bcp-header',
	templateUrl: './bcp-header.component.html',
	styleUrls: ['./bcp-header.component.css']
})
export class BCPHeaderComponent {

	@Input() options: BCPHeaderOptions[] = [];

	constructor(private controller: AgenciesController) {}
	
	keyupInputSearch(value: string) {
		this.controller.searchAgencies(value);
	}
	
}
