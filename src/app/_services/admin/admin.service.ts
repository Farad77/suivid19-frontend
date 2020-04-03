import { Injectable } from '@angular/core';
import { Admin } from '../../_models/Admin';
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
  providers:[AdminService]
})
et d'ajouter au constructeur component.component.ts
constructor( private _adminServices: AdminService) { }
*/
export class AdminService {

  adminUrl = 'https://suivid19-api.herokuapp.com/admins';
  constructor(private http: HttpClient) { }

  //this._adminServices.getAdmins().subscribe(data => {this.users = data;  console.log(this.users)  });
  getAdmins() : Observable<Admin[]>{
    return this.http.get<Admin[]>(this.adminUrl);
  }

  getAdmin(id:number) : Observable<Admin>{
    return this.http.get<Admin>(this.adminUrl+ '/'+ id);
  }

  //this._adminServices.addAdmin(adminObject).subscribe();
  addAdmin (admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.adminUrl, admin)
      /* .pipe(
        catchError(this.handleError())
      )  */;
  }
  private handleError(error: HttpErrorResponse,method:string, admin : Admin) {
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
