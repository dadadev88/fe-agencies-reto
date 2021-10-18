import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgenciesController } from '../../controllers/agencies.controller';
import { Agency } from '../../interfaces/agency-list-item.interface';
import { AgenciesState } from '../../services/agencies-state.service';

@Component({
	selector: 'app-agencies-list',
	templateUrl: './agencies-list.component.html',
	styleUrls: ['./agencies-list.component.css']
})
export class AgenciesListPageComponent implements OnInit {

	constructor(
		public state: AgenciesState,
		public controller: AgenciesController,
		private router: Router
	) {}

	ngOnInit() {
		this.controller.getAll();
	}

	goToDetail(agency: Agency | {}) {
		this.controller.goToDetail(agency);
		this.router.navigate(['/agencias/detalle']);
	}

}
