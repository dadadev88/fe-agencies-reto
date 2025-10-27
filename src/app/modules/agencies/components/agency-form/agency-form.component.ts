import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '@shared/services/loader.service';
import { RoutesAgenciesApp } from 'src/app/core/constants/routes.constants';
import { AgenciesController } from '../../controllers/agencies.controller';
import { Agency } from '../../interfaces/agency-list-item.interface';

declare const dataLayer: Array<object>;

interface AgencyForm {
  agencia: FormControl<string | null>;
  direccion: FormControl<string | null>;
  distrito: FormControl<string | null>;
  lat: FormControl<number | null>;
  lon: FormControl<number | null>;
}


@Component({
  selector: 'bcp-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.css']
})
export class AgencyFormComponent implements OnInit {

  @Input()
  agency: Agency | null = null;
  isNewAgency: boolean = true;

  formAgency: FormGroup<AgencyForm>;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly controller: AgenciesController,
    private readonly router: Router,
    private readonly loader: LoaderService
  ) {
    this.formAgency = this.formBuilder.group({
      agencia: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      distrito: ['', [Validators.required]],
      lat: [0, [Validators.required]],
      lon: [0, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.isNewAgency = !this.agency;

    if (this.agency) this.formAgency.patchValue(this.agency);
  }

  validateIfExistsAgency(currentAgencyLS: string | null) {
    if (!currentAgencyLS && !this.agency) {
      this.router.navigate([RoutesAgenciesApp.list]);
    }
  }

  onSubmit() {
    this.loader.show();

    dataLayer.push({ event: 'bcp_form_agency_submit' });
    this.isNewAgency
      ? this.controller.createAgency(this.formAgency.value as Agency)
      : this.controller.updateAgency({ ...this.agency, ...this.formAgency.value as Agency });
    this.router.navigate([RoutesAgenciesApp.list]);
  }

  goToAgenciesList() {
    dataLayer.push({ event: 'bcp_form_agency_cancel' });
    this.router.navigate([RoutesAgenciesApp.list]);
  }
}
