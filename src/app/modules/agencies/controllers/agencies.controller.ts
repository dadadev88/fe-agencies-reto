import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { LoaderService } from "@shared/services/loader.service";
import { AgenciesService } from "src/app/modules/agencies/services/agencies.service";
import { Agency } from "../interfaces/agency-list-item.interface";
import { RoutesAgenciesApp } from "@constants/routes.constants";
import AgenciesState from "../services/agencies-state.service";
import AgenciesStorageController from "./agencies-storage.controller";

@Injectable()
export class AgenciesController extends AgenciesStorageController {

  constructor(
    private agencyServices: AgenciesService,
    private state: AgenciesState,
    private router: Router,
    private loader: LoaderService
  ) {
    super();
  }

  onInit() {
    this.getAgencies();
    this.loader.close();
  }

  onInitDetail() {
    this.loader.close();
  }

  get currentAgency() {
    return this.state.currentAgency;
  }

  get agencies(): Agency[] {
    return this.state.agencies;
  }

  goToDetail(agency: Agency = {} as Agency) {
    this.loader.show('LO_001')
    this.setCurrentAgency(agency);
    setTimeout(() => {
      this.router.navigate([RoutesAgenciesApp.detail]);
    }, 1200);
  }

  private getAgencies() {
    const agenciesLS = this.getAllFromLS();
    if (!agenciesLS.length) {
      this.agencyServices.getAllFromDataFile().subscribe(agenciesFile => {
        const newAgencies = agenciesFile.map(agency => {
          return { ...agency, id: this.generateId(agency.agencia) };
        });
        this.saveOnLS(newAgencies);
        this.state.setAgencies(agenciesFile);
      });
    } else {
      this.state.setAgencies(agenciesLS);
    }
  }

  createAgency(agency: Agency) {
    const newAgencies = [...this.getAllFromLS()];
    newAgencies.push({ ...agency, id: this.generateId(agency.agencia) })
    this.saveOnLS(newAgencies);
  }

  updateAgency(agency: Agency) {
    const allAgencies = [...this.getAllFromLS()];
    const others = allAgencies.filter(ag => ag.id !== agency.id);
    this.saveOnLS([...others, agency]);
  }

  setCurrentAgency(agency: Agency | null) {
    this.state.setCurrentAgency(agency);
  }

  public filterAgencies(agencies: Agency[], value: string) {
    const cleanValue = value.trim().toLowerCase();

    return agencies.filter(agency => (
      agency.agencia.toLowerCase().includes(cleanValue) ||
      agency.distrito?.toLowerCase().includes(cleanValue) ||
      agency.direccion?.toLowerCase().includes(cleanValue)
    ));
  }

  private generateId(nameAgency: string) {
    return btoa(new Date().getTime() + nameAgency);
  }

}
