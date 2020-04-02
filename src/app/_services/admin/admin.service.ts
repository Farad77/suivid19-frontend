import { Injectable } from '@angular/core';
import { Admin } from '../../_models/Admin';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminUrl = 'https://suivid19-api.herokuapp.com/admins';
  constructor(private http: HttpClient) { }

  getAdmins() : Observable<Admin[]>{
    return this.http.get<Admin[]>(this.adminUrl);
  }

  getAdmin(id:number) : Observable<Admin>{
    return this.http.get<Admin>(this.adminUrl+ '/'+ id);
  }

  addAdmin (admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.adminUrl, admin)
      /* .pipe(
        catchError(this.handleError('addHero', admin))
      ) */;
  }
  private handleError(error: HttpErrorResponse,method:string, admin : Admin) {
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
