import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checktokenGuard } from './checktoken.guard';

describe('checktokenGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checktokenGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
