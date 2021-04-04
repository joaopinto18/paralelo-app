import { TestBed } from '@angular/core/testing';

import { GuardClienteService } from './guard-cliente.service';

describe('GuardClienteService', () => {
  let service: GuardClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
