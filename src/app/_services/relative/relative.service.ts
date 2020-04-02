import { Injectable } from '@angular/core';
import { Relative } from '../../_models/Relative';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RelativeService {

  RelativeUrl = 'https://suivid19-api.herokuapp.com/Relatives';
  constructor(private http: HttpClient) { }

  getRelatives() : Observable<Relative[]>{
    return this.http.get<Relative[]>(this.RelativeUrl);
  }

  getRelative(id:number) : Observable<Relative>{
    return this.http.get<Relative>(this.RelativeUrl+ '/'+ id);
  }

  addRelative (Relative: Relative): Observable<Relative> {
    return this.http.post<Relative>(this.RelativeUrl, Relative)
      /* .pipe(
        catchError(this.handleError('addHero', Relative))
      ) */;
  }
  private handleError(error: HttpErrorResponse,method:string, Relative : Relative) {
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
    // return an observable with a Relative-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
