import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgenciesState } from '../../services/agencies-state.service';

@Component({
	selector: 'app-agencies-detail-page',
	templateUrl: './agencies-detail.component.html',
	styleUrls: ['./agencies-detail.component.css']
})
export class AgenciesDetailPageComponent implements OnInit {

	constructor(
		public agenciesState: AgenciesState,
		private router: Router
	) {}

	ngOnInit() {
		!this.agenciesState.getAgency() && this.router.navigate(['/agencias/listado']);
	}
	
 }
