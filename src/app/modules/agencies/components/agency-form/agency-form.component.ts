import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '@shared/services/loader.service';
import { RoutesAgenciesApp } from 'src/app/core/constants/routes.constants';
import { AgenciesController } from '../../controllers/agencies.controller';
import { Agency } from '../../interfaces/agency-list-item.interface';

@Component({
  selector: 'agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.css']
})
export class AgencyFormComponent implements OnInit {

  @Input()
  agency: Agency | null = null;
  isNewAgency: boolean = true;

  formAgency: UntypedFormGroup = new UntypedFormBuilder().group({});

  constructor(
    private formBuilder: UntypedFormBuilder,
    private controller: AgenciesController,
    private router: Router,
    private loader: LoaderService
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
    const currentAgencyLS = localStorage.getItem('currentAgency');
    if (!currentAgencyLS && !this.agency) {
      this.router.navigate([RoutesAgenciesApp.list]);
      return;
    }

    if (this.agency || currentAgencyLS)
      this.isNewAgency = false;

    if (currentAgencyLS && !this.agency)
      this.agency = JSON.parse(currentAgencyLS);

    localStorage.setItem('currentAgency', JSON.stringify(this.agency));

    this.formAgency.patchValue(this.agency || {});
  }

  onSubmit() {
    this.loader.open();
    this.isNewAgency
      ? this.controller.createAgency(this.formAgency.value)
      : this.controller.updateAgency({ ...this.agency, ...this.formAgency.value });
    this.router.navigate([RoutesAgenciesApp.list]);
  }

  goToAgenciesList() {
    this.router.navigate([RoutesAgenciesApp.list]);
  }
}
