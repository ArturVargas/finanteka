import { TestBed } from '@angular/core/testing';

import { ProyectsService } from './proyects.service';

describe('ProyectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProyectsService = TestBed.get(ProyectsService);
    expect(service).toBeTruthy();
  });
});
