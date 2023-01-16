import { Pipe, PipeTransform } from '@angular/core';
import { AgenciesController } from '../controllers/agencies.controller';
import { Agency } from '../interfaces/agency-list-item.interface';

@Pipe({
  name: 'agenciesFilter'
})
export class AgenciesFilterPipe implements PipeTransform {

  constructor(private controller: AgenciesController) { }

  transform(agencies: Agency[], value: string): Agency[] {
    if (!value)
      return agencies;

    return this.controller.filterAgencies(agencies, value);
  }

}
