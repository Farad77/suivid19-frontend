import { Injectable } from '@angular/core';
import { Patient } from '../../_models/Patient';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const optionRequete = {
  headers: new HttpHeaders({ 
    'Content-Type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})

/*Avant d'utiliser ce service il est important de de l'ajouter aux providers du component.module
@NgModule({
  providers:[patientService]
})
et d'ajouter au constructeur component.component.ts
constructor( private _patientServices: patientService) { }
*/
export class PatientService {

  patientUrl = 'https://suivid19-api.herokuapp.com/patients';
  constructor(private http: HttpClient) { }

  //this._patientServices.getpatients().subscribe(data => {this.users = data;  console.log(this.users)  });
  getPatients() : Observable<Patient[]>{
    return this.http.get<Patient[]>(this.patientUrl);
  }

  getPatient(id:number) : Observable<Patient>{
    return this.http.get<Patient>(this.patientUrl+ '/'+ id);
  }

  //this._patientServices.addpatient(patientObject).subscribe();
  addpatient (patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.patientUrl, patient)
      /* .pipe(
        catchError(this.handleError())
      )  */;
  }
  private handleError(error: HttpErrorResponse,method:string, patient : Patient) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
