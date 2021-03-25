import { TestBed } from '@angular/core/testing';

import { AddInfoUserServicesService } from './add-info-user-services.service';

describe('AddInfoUserServicesService', () => {
  let service: AddInfoUserServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddInfoUserServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
