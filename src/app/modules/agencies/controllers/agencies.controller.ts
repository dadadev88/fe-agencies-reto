import { Injectable } from "@angular/core";
import { AgenciesService } from "src/app/modules/agencies/services/agencies.service";
import { Agency } from "../interfaces/agency-list-item.interface";
import { AgenciesState } from "../services/agencies-state.service";
import { AgenciesStorageController } from "./agencies-storage.controller";

@Injectable()
export class AgenciesController extends AgenciesStorageController {

	constructor(
		private agencyServices: AgenciesService,
		private state: AgenciesState
	) {
		super();
	}
	
	async getAll() {
		const agenciesLS = this.getAllFromLS();
		if (!agenciesLS.length) {
			const agenciesFile = await this.agencyServices.getAllFromDataFile().toPromise();
			this.saveOnLS(agenciesFile.map(a => ({...a, id: this.generateId(a.agencia) })));
			this.state.setAgencies(agenciesFile);
		} else {
			this.state.setAgencies(agenciesLS);
		}
		
		setTimeout(() => this.state.setLoading(false), 500);
	}

	private generateId(nameAgency: string) {
		return btoa(new Date().toISOString() + nameAgency );
	}

	createAgency(agency: Agency) {
		this.saveOnLS([...this.getAllFromLS(), agency]);
	}

	updateAgency(agency: Agency) {
		const allAgencies = [...this.getAllFromLS()];
		const indexToUpdate = allAgencies.findIndex(ag => ag.id === agency.id);
		allAgencies[indexToUpdate] = agency;
		this.saveOnLS(allAgencies);
	}

	searchAgencies(value: string) {
		const allAgencies = [...this.getAllFromLS()];
		let newAgencies: Agency[] = value.trim() !== '' ? this.filterAgencies(allAgencies, value.toLowerCase()) : allAgencies;
		this.state.setAgencies(newAgencies);
	}
	
	private filterAgencies(agencies: Agency[], value: string) {
		return agencies.filter(a => (
			a.agencia.toLowerCase().includes(value) ||
			a.distrito?.toLowerCase().includes(value) ||
			a.direccion?.toLowerCase().includes(value)
		));
	}

	public goToDetail(agency: Agency | null) {
		this.state.setAgency(agency);
	}
}