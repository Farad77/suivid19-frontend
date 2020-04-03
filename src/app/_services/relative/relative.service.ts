import { Injectable } from '@angular/core';
import { Relative } from '../../_models/Relative';
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
  providers:[RelativeService]
})
et d'ajouter au constructeur component.component.ts
constructor( private _RelativeServices: RelativeService) { }
*/
export class RelativeService {

  RelativeUrl = 'https://suivid19-api.herokuapp.com/relatives';
  constructor(private http: HttpClient) { }

  //this._RelativeServices.getRelatives().subscribe(data => {this.users = data;  console.log(this.users)  });
  getRelatives() : Observable<Relative[]>{
    return this.http.get<Relative[]>(this.RelativeUrl);
  }

  getRelative(id:number) : Observable<Relative>{
    return this.http.get<Relative>(this.RelativeUrl+ '/'+ id);
  }

  //this._RelativeServices.addRelative(RelativeObject).subscribe();
  addRelative (Relative: Relative): Observable<Relative> {
    return this.http.post<Relative>(this.RelativeUrl, Relative)
      /* .pipe(
        catchError(this.handleError())
      )  */;
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
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
