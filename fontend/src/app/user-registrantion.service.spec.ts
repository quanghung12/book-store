import { TestBed } from '@angular/core/testing';

import { UserRegistrantionService } from './user-registrantion.service';

describe('UserRegistrantionService', () => {
  let service: UserRegistrantionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistrantionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
