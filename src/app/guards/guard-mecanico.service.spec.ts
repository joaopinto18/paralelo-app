import { TestBed } from '@angular/core/testing';

import { GuardMecanicoService } from './guard-mecanico.service';

describe('GuardMecanicoService', () => {
  let service: GuardMecanicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardMecanicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
