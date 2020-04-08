import { TestBed } from '@angular/core/testing';

import { SurveyChoiceService } from './survey-choice.service';

describe('SurveyChoiceService', () => {
  let service: SurveyChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
