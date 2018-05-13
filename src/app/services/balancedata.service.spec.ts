import { TestBed, inject } from '@angular/core/testing';

import { BalancedataService } from './balancedata.service';

describe('BalancedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BalancedataService]
    });
  });

  it('should be created', inject([BalancedataService], (service: BalancedataService) => {
    expect(service).toBeTruthy();
  }));
});
