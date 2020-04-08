import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'app/_services/auth/auth.service';
import {MatTabsModule} from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup : FormGroup;
  constructor(private _authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  login(){
    if(this.formGroup.valid){
      this.showLoading();
      this._authService.login(this.formGroup.value).subscribe(success => {
        if (success) {
          this.router.navigate(['/dashboard']);
        }
      });
    }
  } 
  showLoading(){
    
  }

}
