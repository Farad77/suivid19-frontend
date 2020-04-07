import { User } from './User';

export interface Test {
    patient: User,
    title: string,
    description: string,
    hesChoice: boolean,
    isRequired: boolean
  }