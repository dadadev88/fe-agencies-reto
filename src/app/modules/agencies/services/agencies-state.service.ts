import { Injectable } from '@angular/core';
import { Agency } from '../interfaces/agency-list-item.interface';

@Injectable()
export class AgenciesState {

	public isLoading: boolean = true;
	public agencies: Agency[] = [];
	public _agency: Agency | null = null;

	setLoading(value: boolean) {
		this.isLoading = value;
	}
	
	setAgencies(agencies: Agency[]) {
		this.agencies = agencies
	}

	get agency() {
		return this.agency;
	}

	set agency(agency: Agency) {
		this.agency = agency;
	}
}
