import { TestBed, inject } from '@angular/core/testing';

import { SewaService } from './sewa.service';

describe('SewaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SewaService]
    });
  });

  it('should ...', inject([SewaService], (service: SewaService) => {
    expect(service).toBeTruthy();
  }));
});
