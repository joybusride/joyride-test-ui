import { TestBed } from '@angular/core/testing';

import { CoachBusService } from './coach-bus.service';

describe('CoachBusService', () => {
  let service: CoachBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
