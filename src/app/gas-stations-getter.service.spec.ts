import { TestBed } from '@angular/core/testing';

import { GasStationsGetterService } from './gas-stations-getter.service';

describe('GasStationsGetterService', () => {
  let service: GasStationsGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GasStationsGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
