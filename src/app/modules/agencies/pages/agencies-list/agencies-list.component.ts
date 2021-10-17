import { Component, OnInit } from '@angular/core';
import { AgenciesController } from '../../controllers/agencies.controller';
import { AgenciesState } from '../../services/agencies-state.service';

@Component({
	selector: 'app-agencies-list',
	templateUrl: './agencies-list.component.html',
	styleUrls: ['./agencies-list.component.css']
})
export class AgenciesListPageComponent implements OnInit {

	constructor(
		public agenciesState: AgenciesState,
		public agenciesController: AgenciesController
	) {}

	ngOnInit() {
		this.agenciesController.getAll();
	}

}
