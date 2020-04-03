import { Injectable } from '@angular/core';
import { Agent } from '../../_models/Agent';
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
  providers:[AgentService]
})
et d'ajouter au constructeur component.component.ts
constructor( private _AgentServices: AgentService) { }
*/
export class AgentService {

  AgentUrl = 'https://suivid19-api.herokuapp.com/agents';
  constructor(private http: HttpClient) { }

  //this._AgentServices.getAgents().subscribe(data => {this.users = data;  console.log(this.users)  });
  getAgents() : Observable<Agent[]>{
    return this.http.get<Agent[]>(this.AgentUrl);
  }

  getAgent(id:number) : Observable<Agent>{
    return this.http.get<Agent>(this.AgentUrl+ '/'+ id);
  }

  //this._AgentServices.addAgent(AgentObject).subscribe();
  addAgent (Agent: Agent): Observable<Agent> {
    return this.http.post<Agent>(this.AgentUrl, Agent)
      /* .pipe(
        catchError(this.handleError())
      )  */;
  }
  private handleError(error: HttpErrorResponse,method:string, Agent : Agent) {
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
