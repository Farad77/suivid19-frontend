import { Injectable } from '@angular/core';
import { SurveyAnswer } from '../../_models/SurveyAnswer';
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
  providers:[SurveyAnswerService]
})
et d'ajouter au constructeur component.component.ts
constructor( private _SurveyAnswerServices: SurveyAnswerService) { }
*/
export class SurveyAnswerService {

  SurveyAnswerUrl = 'https://suivid19-api.herokuapp.com/surveyanswer';
  constructor(private http: HttpClient) { }

  //this._SurveyAnswerServices.getSurveyAnswers().subscribe(data => {this.users = data;  console.log(this.users)  });
  getSurveyAnswers() : Observable<SurveyAnswer[]>{
    return this.http.get<SurveyAnswer[]>(this.SurveyAnswerUrl);
  }

  getSurveyAnswer(id:number) : Observable<SurveyAnswer>{
    return this.http.get<SurveyAnswer>(this.SurveyAnswerUrl+ '/'+ id);
  }

  //this._SurveyAnswerServices.addSurveyAnswer(SurveyAnswerObject).subscribe();
  addSurveyAnswer (SurveyAnswer: SurveyAnswer): Observable<SurveyAnswer> {
    return this.http.post<SurveyAnswer>(this.SurveyAnswerUrl, SurveyAnswer)
      /* .pipe(
        catchError(this.handleError())
      )  */;
  }
  private handleError(error: HttpErrorResponse,method:string, SurveyAnswer : SurveyAnswer) {
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
