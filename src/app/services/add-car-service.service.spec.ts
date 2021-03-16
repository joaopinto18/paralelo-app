import { TestBed } from '@angular/core/testing';

import { AddCarServiceService } from './add-car-service.service';

describe('AddCarServiceService', () => {
  let service: AddCarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
