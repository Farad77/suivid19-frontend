import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from 'app/_services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private _authService:AuthService, private router:Router){}
    canActivate(){
        if(this._authService.isLoggedIn()){
            this.router.navigate(['/dashboard']);
        }
        console.log(this._authService.isLoggedIn())
        return !this._authService.isLoggedIn();
    }
    
}