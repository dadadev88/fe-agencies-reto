import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Agency } from '../interfaces/agency-list-item.interface';

interface IAgencyState {
  agencies: Agency[];
  current: Agency | null;
}

const INITIAL_STATE: IAgencyState = {
  agencies: [],
  current: null
}

@Injectable()
// @State
export default class AgenciesState {

  private data!: IAgencyState;
  public agencyToSearch: Subject<string> = new Subject<string>();

  constructor() {
    this.setInitial();
  }

  setInitial() {
    this.data = INITIAL_STATE;
  }

  setAgencies(agencies: Agency[]) { this.data.agencies = agencies; }
  get agencies() { return this.data.agencies; }

  setCurrentAgency(agency: Agency | null) { this.data.current = agency; }
  get currentAgency() { return this.data.current; }

  setAgencyToSearch(value: string): void { this.agencyToSearch.next(value); }

}

/* interface StateMetaData {
  name: string;
  initialState: unknown;

}

function State(constructor: Function) {
  console.log('Esto es un decorador');
  console.log({ constructor });
}
 */
