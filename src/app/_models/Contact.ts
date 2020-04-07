import { Patient } from './Patient';

export interface Contact {
    patient: Patient,
    lastName: string,
    firstName: string,
    phone: string,
    mobile: string,
    comment: string

}