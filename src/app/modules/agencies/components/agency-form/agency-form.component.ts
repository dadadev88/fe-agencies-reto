import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Agency } from '../../interfaces/agency-list-item.interface';

@Component({
	selector: 'app-agency-form',
	templateUrl: './agency-form.component.html',
	styleUrls: ['./agency-form.component.css']
})
export class AgencyFormComponent implements OnInit {

	@Input()
	agency: Agency | null = {} as Agency;

	formAgency: FormGroup = new FormBuilder().group({
		agencia: ['', [Validators.required]],
		direccion: ['', [Validators.required]],
		distrito: ['', [Validators.required]],
		lat: ['', [Validators.required]],
		lon: ['', [Validators.required]]
	});

	constructor(private formBuilder: FormBuilder) {}
	
	ngOnInit(): void {
		if (!this.agency) {
			this.agency = {agencia: '',direccion: '',departamento: ''};
		}
		this.formAgency.patchValue(this.agency)
	}

	onSubmit(e: Event) {
		console.log(e);
	}
}
