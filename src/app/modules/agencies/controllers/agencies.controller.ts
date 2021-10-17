import { Injectable } from "@angular/core";
import { AgenciesService } from "src/app/modules/agencies/services/agencies.service";
import { Agency } from "../interfaces/agency-list-item.interface";
import { AgenciesState } from "../services/agencies-state.service";
import { AgenciesStorageController } from "./agencies-storage.controller";

@Injectable()
export class AgenciesController extends AgenciesStorageController {

	constructor(
		private agencyServices: AgenciesService,
		private agenciesState: AgenciesState
	) {
		super();
	}
	
	/**
	 * Get all agencies from LS, if not exists call services to get data from agencies.json
	 */
	async getAll() {
		const agenciesLS = this.getAllFromLS();
		if (!agenciesLS.length) {
			const agenciesFile = await this.agencyServices.getAllFromDataFile().toPromise();
			this.saveOnLS(agenciesFile);
			this.agenciesState.setAgencies(agenciesFile);
		} else {
			this.agenciesState.setAgencies(agenciesLS);
		}
		
		setTimeout(() => this.agenciesState.setLoading(false), 1000);
	}


	/**
	 * Update agency with clone of all agencies and replace index in this clone array 
	 * @param agency agency to update
	 */
	updateAgency(agency: Agency) {
		const allAgencies = [...this.getAllFromLS()];
		const indexToUpdate = allAgencies.findIndex(ag => ag.agencia === agency.agencia);
		allAgencies[indexToUpdate] = agency;
		this.saveOnLS(allAgencies);
	}
}