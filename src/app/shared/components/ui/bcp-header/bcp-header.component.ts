import { Component, Input } from '@angular/core';
import { AgenciesController } from 'src/app/modules/agencies/controllers/agencies.controller';

@Component({
	selector: 'app-bcp-header',
	templateUrl: './bcp-header.component.html',
	styleUrls: ['./bcp-header.component.css']
})
export class BCPHeaderComponent {

	@Input() title!: string;
	@Input() showInput: boolean = true;

	constructor(private controller: AgenciesController) {}
	
	keyupInputSearch(value: string) {
		this.controller.searchAgencies(value);
	}
	
}
