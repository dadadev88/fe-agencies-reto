import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyListItem } from '../../interfaces/agency-list-item.interface';

@Component({
	selector: 'app-agency-list-item',
	templateUrl: './agency-list-item.component.html',
	styleUrls: ['./agency-list-item.component.css']
})
export class AgencyListItemComponent {

	defaultImg: string = 'assets/images/agency.svg';

	@Input()
	agencies: AgencyListItem[] = [];
	@Input()
	title?: string;

	constructor(private router: Router) {}

	goToDetail(agency: AgencyListItem) {
		this.router.navigate(['/agencias/detalle', agency.agencia]);
	}
}
