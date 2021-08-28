import { TestBed } from '@angular/core/testing';

import { AddIdTokenInterceptor } from './add-id-token.interceptor';

describe('AddIdTokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AddIdTokenInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AddIdTokenInterceptor = TestBed.inject(AddIdTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
