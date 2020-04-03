import { Injectable } from '@angular/core';
import { Person } from '../../_models/Person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  PersonUrl = 'https://suivid19-api.herokuapp.com/Persons';
  constructor(private http: HttpClient) { }

  getPersons() : Observable<Person[]>{
    return this.http.get<Person[]>(this.PersonUrl);
  }

  getPerson(id:number) : Observable<Person>{
    return this.http.get<Person>(this.PersonUrl+ '/'+ id);
  }

  addPerson (Person: Person): Observable<Person> {
    return this.http.post<Person>(this.PersonUrl, Person)
      /* .pipe(
        catchError(this.handleError('addHero', Person))
      ) */;
  }
  private handleError(error: HttpErrorResponse,method:string, Person : Person) {
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
    // return an observable with a Person-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
