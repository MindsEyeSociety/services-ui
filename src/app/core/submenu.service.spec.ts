import { TestBed, inject } from '@angular/core/testing';

import { SubmenuService } from './submenu.service';

describe('SubmenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubmenuService]
    });
  });

  it('should ...', inject([SubmenuService], (service: SubmenuService) => {
    expect(service).toBeTruthy();
  }));
});
