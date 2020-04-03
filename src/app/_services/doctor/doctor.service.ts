import { Injectable } from '@angular/core';
import { Doctor } from '../../_models/Doctor';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  DoctorUrl = 'https://suivid19-api.herokuapp.com/Doctors';
  constructor(private http: HttpClient) { }

  getDoctors() : Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.DoctorUrl);
  }

  getDoctor(id:number) : Observable<Doctor>{
    return this.http.get<Doctor>(this.DoctorUrl+ '/'+ id);
  }

  addDoctor (Doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.DoctorUrl, Doctor)
      /* .pipe(
        catchError(this.handleError('addHero', Doctor))
      ) */;
  }
  private handleError(error: HttpErrorResponse,method:string, Doctor : Doctor) {
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
    // return an observable with a Doctor-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
