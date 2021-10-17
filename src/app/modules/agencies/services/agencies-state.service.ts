import { Injectable } from '@angular/core';
import { AgencyListItem } from '../interfaces/agency-list-item.interface';

@Injectable()
export class AgenciesState {

	public isLoading: boolean = true;
	public agencies: AgencyListItem[] = [];

	setLoading(value: boolean) {
		this.isLoading = value;
	}
	
	setAgencies(agencies: AgencyListItem[]) {
		this.agencies = agencies
	}
}
