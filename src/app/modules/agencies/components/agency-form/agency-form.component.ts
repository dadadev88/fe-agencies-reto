import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PATTERN_ADDRESS, PATTERN_NAME, PATTERN_POS_NEG, PATTERN_TEXT } from 'src/app/core/constants/patterns-regexp';
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
			agencia: ['', [Validators.required, Validators.pattern(PATTERN_NAME)]],
			direccion: ['', [Validators.required, Validators.pattern(PATTERN_ADDRESS)]],
			distrito: ['', [Validators.required, Validators.pattern(PATTERN_TEXT)]],
			lat: ['', [Validators.required, Validators.pattern(PATTERN_POS_NEG)]],
			lon: ['', [Validators.required, Validators.pattern(PATTERN_POS_NEG)]]
		});
	}
	
	ngOnInit(): void {
		if (this.agency) {
			this.formAgency.patchValue(this.agency)
		}
	}

	onSubmit() {
		if (this.formAgency.valid) {
			this.controller.updateAgency({...this.agency, ...this.formAgency.value});
			this.router.navigate(['/agencias', 'listado']);
		}
	}
}
