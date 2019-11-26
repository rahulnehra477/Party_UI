import { TestBed } from '@angular/core/testing';

import { PPchartService } from './ppchart.service';

describe('PPchartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PPchartService = TestBed.get(PPchartService);
    expect(service).toBeTruthy();
  });
});
