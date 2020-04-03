import { Injectable } from '@angular/core';
import { Agent } from '../../_models/Agent';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  AgentUrl = 'https://suivid19-api.herokuapp.com/Agents';
  constructor(private http: HttpClient) { }

  getAgents() : Observable<Agent[]>{
    return this.http.get<Agent[]>(this.AgentUrl);
  }

  getAgent(id:number) : Observable<Agent>{
    return this.http.get<Agent>(this.AgentUrl+ '/'+ id);
  }

  addAgent (Agent: Agent): Observable<Agent> {
    return this.http.post<Agent>(this.AgentUrl, Agent)
      /* .pipe(
        catchError(this.handleError('addHero', Agent))
      ) */;
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
    // return an observable with a Agent-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
