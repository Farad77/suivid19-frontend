import { SurveyCategorie } from './SurveyCategorie';

export interface Survey {
    categorie: SurveyCategorie,
    title: string,
    description: string,
    hesChoice: boolean,
    isRequired: boolean
  }