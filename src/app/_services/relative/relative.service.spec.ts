import { TestBed } from '@angular/core/testing';

import { RelativeService } from './relative.service';

describe('RelativeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelativeService = TestBed.get(RelativeService);
    expect(service).toBeTruthy();
  });
});
