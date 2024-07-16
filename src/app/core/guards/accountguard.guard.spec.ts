import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { accountguardGuard } from './accountguard.guard';

describe('accountguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => accountguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
