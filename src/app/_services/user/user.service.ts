import { Injectable } from '@angular/core';
import { User } from '../../_models/User';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  UserUrl = 'https://suivid19-api.herokuapp.com/users';
  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.UserUrl);
  }

  getUser(id:number) : Observable<User>{
    return this.http.get<User>(this.UserUrl+ '/'+ id);
  }

  addUser (User: User): Observable<User> {
    return this.http.post<User>(this.UserUrl, User)
      /* .pipe(
        catchError(this.handleError('addHero', User))
      ) */;
  }
  private handleError(error: HttpErrorResponse,method:string, User : User) {
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
