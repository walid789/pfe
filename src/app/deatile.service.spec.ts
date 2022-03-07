import { TestBed } from '@angular/core/testing';

import { DeatileService } from './deatile.service';

describe('DeatileService', () => {
  let service: DeatileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeatileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
