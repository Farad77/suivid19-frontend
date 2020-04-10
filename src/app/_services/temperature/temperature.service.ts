import { Injectable } from '@angular/core';
import { Temperature } from '../../_models/Temperature';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  TemperatureUrl = 'https://suivid19-api.herokuapp.com/patients';
  constructor(private http: HttpClient) { }

  //this._TemperatureServices.getTemperatures().subscribe(data => {this.users = data;  console.log(this.users)  });
  getTemperatures(): Observable<Temperature[]> {
    return this.http.get<Temperature[]>(this.TemperatureUrl);
  }

  getTemperature(id: number): Observable<Temperature> {
    return this.http.get<Temperature>(this.TemperatureUrl + '/' + id + '/temperatures');
  }

  //this._TemperatureServices.addTemperature(AgentObject).subscribe();
  addTemperature(id: number, Temperature: Temperature): Observable<Temperature> {
    return this.http.post<Temperature>(this.TemperatureUrl + '/' + id + 'add/temperature', Temperature)
      /* .pipe(
        catchError(this.handleError())
      )  */;
  }

  private handleError(error: HttpErrorResponse, method: string, Temperature: Temperature) {
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
