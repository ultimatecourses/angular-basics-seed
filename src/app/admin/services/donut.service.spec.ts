import { TestBed } from '@angular/core/testing';

import { DonutService } from './donut.service';

describe('DonutService', () => {
  let service: DonutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
