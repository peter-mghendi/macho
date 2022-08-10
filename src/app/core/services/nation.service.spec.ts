import { TestBed } from '@angular/core/testing';

import { NationService } from './nation.service';

describe('NationService', () => {
  let service: NationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
