import { Survey } from './Survey';
import { Test } from './Test';

export interface SurveyAnswer {
    test: Test,
    survey: Survey,
    answer: string
  }