import { Injectable } from '@angular/core';
import { Doctor } from '../../_models/Doctor';
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
  providers:[DoctorService]
})
et d'ajouter au constructeur component.component.ts
constructor( private _DoctorServices: DoctorService) { }
*/
export class DoctorService {

  DoctorUrl = 'https://suivid19-api.herokuapp.com/doctors';
  constructor(private http: HttpClient) { }

  //this._DoctorServices.getDoctors().subscribe(data => {this.users = data;  console.log(this.users)  });
  getDoctors() : Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.DoctorUrl);
  }

  getDoctor(id:number) : Observable<Doctor>{
    return this.http.get<Doctor>(this.DoctorUrl+ '/'+ id);
  }

  //this._DoctorServices.addDoctor(DoctorObject).subscribe();
  addDoctor (Doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.DoctorUrl, Doctor)
      /* .pipe(
        catchError(this.handleError())
      )  */;
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
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
