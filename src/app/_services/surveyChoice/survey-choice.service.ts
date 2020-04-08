import { Injectable } from '@angular/core';
import { SurveyChoices } from '../../_models/SurveyChoice';
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
  providers:[SurveyChoiceService]
})
et d'ajouter au constructeur component.component.ts
constructor( private _SurveyChoiceServices: SurveyChoiceService) { }
*/
export class SurveyChoiceService {

  SurveyChoiceUrl = 'https://suivid19-api.herokuapp.com/surveychoice';
  constructor(private http: HttpClient) { }

  //this._SurveyChoiceServices.getSurveyChoices().subscribe(data => {this.users = data;  console.log(this.users)  });
  getSurveyChoices() : Observable<SurveyChoices[]>{
    return this.http.get<SurveyChoices[]>(this.SurveyChoiceUrl);
  }

  getSurveyChoice(id:number) : Observable<SurveyChoices>{
    return this.http.get<SurveyChoices>(this.SurveyChoiceUrl+ '/'+ id);
  }

  //this._SurveyChoiceServices.addSurveyChoice(SurveyChoiceObject).subscribe();
  addSurveyChoice (SurveyChoice: SurveyChoices): Observable<SurveyChoices> {
    return this.http.post<SurveyChoices>(this.SurveyChoiceUrl, SurveyChoice)
      /* .pipe(
        catchError(this.handleError())
      )  */;
  }
  private handleError(error: HttpErrorResponse,method:string, SurveyChoice : SurveyChoices) {
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
