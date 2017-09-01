import { TestBed, inject } from '@angular/core/testing';

import { BarangService } from './barang.service';

describe('BarangService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarangService]
    });
  });

  it('should ...', inject([BarangService], (service: BarangService) => {
    expect(service).toBeTruthy();
  }));
});
