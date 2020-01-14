import { TestBed } from '@angular/core/testing';

import { CryptionService } from './cryption.service';

describe('CryptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptionService = TestBed.get(CryptionService);
    expect(service).toBeTruthy();
  });
});
