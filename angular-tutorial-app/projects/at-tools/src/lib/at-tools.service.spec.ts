import { TestBed } from '@angular/core/testing';

import { AtToolsService } from './at-tools.service';

describe('AtToolsService', () => {
  let service: AtToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
