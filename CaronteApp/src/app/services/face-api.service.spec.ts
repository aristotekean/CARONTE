import { TestBed } from '@angular/core/testing';

import { FaceApiService } from './face-api.service';

describe('FaceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaceApiService = TestBed.get(FaceApiService);
    expect(service).toBeTruthy();
  });
});
