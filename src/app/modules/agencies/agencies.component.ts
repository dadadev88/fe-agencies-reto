import { Component } from '@angular/core';
import { BCPHeaderOptions } from '@shared/interfaces/bcp-header.interface';
import { AgenciesState } from './services/agencies-state.service';

@Component({
	selector: 'app-agencies',
	templateUrl: './agencies.component.html',
	styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent {

	optionsHeader: Array<BCPHeaderOptions> = [
		{ description: 'Agencias', toRoute: ['/agencias'] }
	];

	constructor(public state: AgenciesState) {}

}
