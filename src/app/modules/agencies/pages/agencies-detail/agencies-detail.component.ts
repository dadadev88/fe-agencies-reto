import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-agencies-detail-page',
	templateUrl: './agencies-detail.component.html',
	styleUrls: ['./agencies-detail.component.css']
})
export class AgenciesDetailPageComponent implements OnInit {

	constructor(private router: ActivatedRoute) {}

	ngOnInit() {
		this.router.params.subscribe(params => {
			console.log("params", params);
		})
	}
	
 }
