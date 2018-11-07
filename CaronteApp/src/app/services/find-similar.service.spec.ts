/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FindSimilarService } from './find-similar.service';

describe('Service: FindSimilar', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindSimilarService]
    });
  });

  it('should ...', inject([FindSimilarService], (service: FindSimilarService) => {
    expect(service).toBeTruthy();
  }));
});
