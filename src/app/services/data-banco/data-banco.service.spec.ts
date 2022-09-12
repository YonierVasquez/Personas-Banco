import { TestBed } from '@angular/core/testing';

import { DataBancoService } from './data-banco.service';

describe('DataBancoService', () => {
  let service: DataBancoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBancoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
