import { Injectable } from '@angular/core';
import { Admin } from '../../_models/Admin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  configUrl = 'https://suivid19-api.herokuapp.com/admins';
  constructor(private http: HttpClient) { }

  getAdmin() : Observable<Admin[]>{
    return this.http.get<Admin[]>(this.configUrl);
  }
}
