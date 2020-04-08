import { Injectable } from '@angular/core';
import { Survey } from '../../_models/Survey';
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
  providers:[SurveyService]
})
et d'ajouter au constructeur component.component.ts
constructor( private _SurveyServices: SurveyService) { }
*/
export class SurveyService {

  SurveyUrl = 'https://suivid19-api.herokuapp.com/survey';
  constructor(private http: HttpClient) { }

  //this._SurveyServices.getSurveys().subscribe(data => {this.users = data;  console.log(this.users)  });
  getSurveys() : Observable<Survey[]>{
    return this.http.get<Survey[]>(this.SurveyUrl);
  }

  getSurvey(id:number) : Observable<Survey>{
    return this.http.get<Survey>(this.SurveyUrl+ '/'+ id);
  }

  //this._SurveyServices.addSurvey(SurveyObject).subscribe();
  addSurvey (Survey: Survey): Observable<Survey> {
    return this.http.post<Survey>(this.SurveyUrl, Survey)
      /* .pipe(
        catchError(this.handleError())
      )  */;
  }
  private handleError(error: HttpErrorResponse,method:string, Survey : Survey) {
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
