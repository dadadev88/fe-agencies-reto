import { AgenciesController } from '../controllers/agencies.controller';
import { Agency } from '../interfaces/agency-list-item.interface';
import { AgenciesFilterPipe } from './agencies-filter.pipe';

describe('@AgenciesFilterPipe', () => {
  let pipe: AgenciesFilterPipe;
  let controllerSpy = jasmine.createSpyObj(AgenciesController, ['filterAgencies'])

  beforeEach(() => {
    pipe = new AgenciesFilterPipe(controllerSpy);
  });

  it('should filter agencies when have value to find', () => {
    const agencies = [] as Agency[];
    const value = 'Lima';

    pipe.transform(agencies, value);

    expect(controllerSpy.filterAgencies).toHaveBeenCalledWith(agencies, value);
  });

  it("should not filter agencies when dont have value to find", () => {
    const agencies = [] as Agency[];
    const value = '';

    pipe.transform(agencies, value);

    expect(controllerSpy.filterAgencies).toHaveBeenCalledTimes(0);
  });
});
