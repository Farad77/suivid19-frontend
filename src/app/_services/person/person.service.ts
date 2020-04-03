import { Injectable } from '@angular/core';
import { Person } from '../../_models/Person';
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
  providers:[PersonService]
})
et d'ajouter au constructeur component.component.ts
constructor( private _PersonServices: PersonService) { }
*/
export class PersonService {

  PersonUrl = 'https://suivid19-api.herokuapp.com/persons';
  constructor(private http: HttpClient) { }

  //this._PersonServices.getPersons().subscribe(data => {this.users = data;  console.log(this.users)  });
  getPersons() : Observable<Person[]>{
    return this.http.get<Person[]>(this.PersonUrl);
  }

  getPerson(id:number) : Observable<Person>{
    return this.http.get<Person>(this.PersonUrl+ '/'+ id);
  }

  //this._PersonServices.addPerson(PersonObject).subscribe();
  addPerson (Person: Person): Observable<Person> {
    return this.http.post<Person>(this.PersonUrl, Person)
      /* .pipe(
        catchError(this.handleError())
      )  */;
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
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
