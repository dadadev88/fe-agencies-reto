import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgenciesController } from '../../controllers/agencies.controller';
import { Agency } from '../../interfaces/agency-list-item.interface';

@Component({
	selector: 'app-agency-form',
	templateUrl: './agency-form.component.html',
	styleUrls: ['./agency-form.component.css']
})
export class AgencyFormComponent implements OnInit {

	@Input() agency?: Agency | null = null;

	formAgency: FormGroup = new FormBuilder().group({});

	constructor(
		private formBuilder: FormBuilder,
		private controller: AgenciesController,
		private router: Router
	) {
		this.formAgency = this.formBuilder.group({
			agencia: ['', [Validators.required]],
			direccion: ['', [Validators.required]],
			distrito: ['', [Validators.required]],
			lat: ['', [Validators.required]],
			lon: ['', [Validators.required]]
		});
	}
	
	ngOnInit(): void {
		if (this.agency) {
			this.formAgency.patchValue(this.agency)
		}
	}

	onSubmit() {
		if (this.formAgency.valid) {
			this.controller.updateAgency(this.formAgency.value);
			this.router.navigate(['/agencias', 'listado']);
		}
	}
}
