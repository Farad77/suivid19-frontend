import { Survey } from './Survey';

export interface SurveyChoices {
    survey: Survey,
    value: string,
    description: string,
    alertLevel: number
  }