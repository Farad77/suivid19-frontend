import { Injectable } from '@angular/core';
import { Agent } from '../../_models/Agent';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, of, iif } from 'rxjs';
import { catchError, tap, mapTo } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Tokens } from '../../_models/Tokens';

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
export class AuthService {

  private helper = new JwtHelperService();
  private readonly JWT_TOKEN = 'jwt-token';
  private loggedUser:string;


  public user:Observable<any>;
  private userData = new BehaviorSubject(null);
  LoginUrl = 'https://suivid19-api.herokuapp.com/auth/login';

  constructor(private http: HttpClient) { 
  }

  login(user : {username:string, password:string}):Observable<boolean>{
    return this.http.post<any>(this.LoginUrl, user)
    .pipe(
      tap(token =>{this.doLoginUser(user.username, token.access_token)} ),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      })
    )
    /* const payload = new HttpParams()
    .set('username', 'admin@suivid19.re')
    .set('password', 'admin');
    return this.http.post(this.LoginUrl, payload) */
  }
  logout(){
    this.doLogoutUser();
   /*  return this.http.post<any>(this.LogoutUrl, user)
    .pipe(
      tap(tokens => this.doLogoutUser(user.username, tokens)),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      })
    ) */
  }
  
  private doLogoutUser(){
    this.loggedUser = null;
    this.removeTokens();
  }

  getJwtToken():any{
    return localStorage.getItem(this.JWT_TOKEN);
  }
  isLoggedIn(){
    return !!this.getJwtToken();
  }
  private doLoginUser(username:string, token:string){
    this.loggedUser = username;
    this.storeToken(token);
  }
  storeToken(tokens:string){
    localStorage.setItem(this.JWT_TOKEN, tokens);
  }
  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
  }
}
