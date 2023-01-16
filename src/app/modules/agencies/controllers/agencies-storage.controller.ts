import { LocalStorageProvider } from "src/app/core/storage/local-storage.provider"
import { Agency } from "../interfaces/agency-list-item.interface";

export default class AgenciesStorageController extends LocalStorageProvider<Agency[]> {

  constructor() {
    super('agenciesLocal');
  }

  getAllFromLS(): Agency[] {
    return this.getValue();
  }

  saveOnLS(agencies: Agency[]) {
    this.setValue(JSON.stringify(agencies));
  }
}
