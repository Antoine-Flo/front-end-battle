import { TestBed } from '@angular/core/testing';

import { IframeToImgService } from './iframe-to-img.service';

describe('IframeToImgService', () => {
  let service: IframeToImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IframeToImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
