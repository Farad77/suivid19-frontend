import { Relative } from './Relative';
import { Doctor } from './Doctor';
import { Ide } from './Ide';
import { Contact } from './Contact';

export interface Patient {
    birthday: number,
    birthmounth: number,
    birthyear: number,
    gender: string,
    isGeolocated: boolean,
    isHospitalized: boolean,
    relatives: Array<Relative>,
    doctor: Doctor,
    ides: Array<Ide>,
    contacts: Array<Contact>,
    comment:string
  }