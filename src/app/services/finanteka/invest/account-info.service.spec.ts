import { TestBed } from '@angular/core/testing';

import { AccountInfoService } from './account-info.service';

describe('AccountInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountInfoService = TestBed.get(AccountInfoService);
    expect(service).toBeTruthy();
  });
});
