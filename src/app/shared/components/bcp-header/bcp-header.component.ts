import { Component } from '@angular/core';
import { BCPHeaderOptions } from './bcp-header.model';

@Component({
	selector: 'app-bcp-header',
	templateUrl: './bcp-header.component.html',
	styleUrls: ['./bcp-header.component.css']
})
export class BCPHeaderComponent {

	options: Array<BCPHeaderOptions> = [
		{ description: 'Agencias', toRoute: ['/agencias'] },
		{ description: 'Favoritas', toRoute: ['/agencias', 'favoritas'] },
		{ description: 'Detalle', toRoute: ['/agencias', 'detalle'] }
	];
	
}
