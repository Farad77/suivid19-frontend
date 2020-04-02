import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  configUrl = 'https://suivid19-api.herokuapp.com/users';
  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.configUrl);
  }
}
