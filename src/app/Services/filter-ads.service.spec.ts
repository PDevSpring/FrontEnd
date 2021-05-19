import { TestBed } from '@angular/core/testing';

import { FilterAdsService } from './filter-ads.service';

describe('FilterAdsService', () => {
  let service: FilterAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
