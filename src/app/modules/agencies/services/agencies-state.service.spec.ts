import { TestBed } from '@angular/core/testing';

import { AgenciesState } from './agencies-state.service';

describe('AgenciesState', () => {
  let service: AgenciesState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgenciesState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
