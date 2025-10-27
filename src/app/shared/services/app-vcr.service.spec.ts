import { TestBed } from '@angular/core/testing';

import { AppVCR } from './app-vcr.service';

describe('DynamicComponentService', () => {
  let service: AppVCR;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppVCR);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
