import { TestBed } from '@angular/core/testing';

import { GuardGerenteService } from './guard-gerente.service';

describe('GuardGerenteService', () => {
  let service: GuardGerenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardGerenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
