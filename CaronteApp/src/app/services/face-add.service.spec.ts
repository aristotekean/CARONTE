import { TestBed } from '@angular/core/testing';

import { FaceAddService } from './face-add.service';

describe('FaceAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaceAddService = TestBed.get(FaceAddService);
    expect(service).toBeTruthy();
  });
});
