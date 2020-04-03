import { Injectable } from '@angular/core';
import { User } from '../../_models/User';
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
  providers:[UserService]
})
et d'ajouter au constructeur component.component.ts
constructor( private _UserServices: UserService) { }
*/
export class UserService {

  UserUrl = 'https://suivid19-api.herokuapp.com/users';
  constructor(private http: HttpClient) { }

  //this._UserServices.getUsers().subscribe(data => {this.users = data;  console.log(this.users)  });
  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.UserUrl);
  }

  getUser(id:number) : Observable<User>{
    return this.http.get<User>(this.UserUrl+ '/'+ id);
  }

  //this._UserServices.addUser(UserObject).subscribe();
  addUser (User: User): Observable<User> {
    return this.http.post<User>(this.UserUrl, User)
      /* .pipe(
        catchError(this.handleError())
      )  */;
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
