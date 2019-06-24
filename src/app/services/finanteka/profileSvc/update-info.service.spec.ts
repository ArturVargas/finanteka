import { TestBed } from '@angular/core/testing';

import { UpdateInfoService } from './update-info.service';

describe('UpdateInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateInfoService = TestBed.get(UpdateInfoService);
    expect(service).toBeTruthy();
  });
});
