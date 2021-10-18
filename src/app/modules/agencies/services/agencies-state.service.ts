import { Injectable } from '@angular/core';
import { Agency } from '../interfaces/agency-list-item.interface';

@Injectable()
export class AgenciesState {

	private isLoading: boolean = true;
	private agencies: Agency[] = [];
	private agency: Agency | null = null;
	public isHeaderFormMode: boolean = true;

	setLoading(value: boolean) {
		this.isLoading = value;
	}

	getLoading() {
		return this.isLoading;
	}
	
	setAgencies(agencies: Agency[]) {
		this.agencies = agencies;
	}
	
	getAgencies() {
		return this.agencies;
	}

	getAgency() {
		return this.agency;
	}

	setAgency(agency: Agency) {
		this.agency = agency;
	}

	setFormMode(mode: boolean) {
		this.isHeaderFormMode = mode;
	}
}
