/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ClickerService } from './clicker.service';

describe('ClickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClickerService]
    });
  });

  it('should ...', inject([ClickerService], (service: ClickerService) => {
    expect(service).toBeTruthy();
  }));
});
