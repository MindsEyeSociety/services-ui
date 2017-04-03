import { TestBed, inject } from '@angular/core/testing';

import { VoteItemService } from './vote-item.service';

describe('VoteItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoteItemService]
    });
  });

  it('should ...', inject([VoteItemService], (service: VoteItemService) => {
    expect(service).toBeTruthy();
  }));
});
