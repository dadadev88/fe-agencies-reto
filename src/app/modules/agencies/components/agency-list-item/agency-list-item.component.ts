import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Agency } from '../../interfaces/agency-list-item.interface';

@Component({
	selector: 'app-agency-list-item',
	templateUrl: './agency-list-item.component.html',
	styleUrls: ['./agency-list-item.component.css']
})
export class AgencyListItemComponent {

	defaultImg: string = 'assets/images/agency.svg';

	@Input()
	agencies: Agency[] = [];
	@Input()
	title?: string;

	@Output()
	toDetail = new EventEmitter<Agency>();

	constructor() {}

	goToDetail(agency: Agency) {
		this.toDetail.emit(agency);
	}
}
