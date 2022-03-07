import { TestBed } from '@angular/core/testing';

import { AppServiseService } from './app-servise.service';

describe('AppServiseService', () => {
  let service: AppServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
