import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { AgenciesService } from "src/app/modules/agencies/services/agencies.service";
import { LocalStorageProvider } from "../../../core/storage/local-storage.provider";
import { Agency } from "../interfaces/agency-list-item.interface";
import { AgenciesState } from "../services/agencies-state.service";

@Injectable()
export class AgenciesController extends LocalStorageProvider {

	constructor(
		private agencyServices: AgenciesService,
		private agenciesState: AgenciesState
	) {
		super('agenciesLocal');
	}
	
	getAll() {
		const agenciesLS = JSON.parse(this.getValue<Agency[]>() || '[]');
		!agenciesLS?.length ? this.getAgenciesFromService() : this.getAgenciesFromLS(agenciesLS);
	}

	private getAgenciesFromLS(agenciesLS: any) {
		const agenciesLS$ = of(agenciesLS).pipe(delay(1000));
		agenciesLS$.subscribe(agencies => {
			this.agenciesState.setAgencies(agencies);
			this.agenciesState.setLoading(false);
		});
	}

	private getAgenciesFromService() {
		this.agencyServices.getAllFromDataFile().subscribe(agencies => {
			this.agenciesState.setAgencies(agencies);
			this.setValue<Agency[]>(JSON.stringify(agencies));
			this.agenciesState.setLoading(false);
		});
	}

}