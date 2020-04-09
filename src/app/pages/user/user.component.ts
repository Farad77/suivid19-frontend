import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/_services/user/user.service';
import { User } from 'app/_models/User';
import { Patient } from 'app/_models/Patient';
import { AuthService } from 'app/_services/auth/auth.service';
import { PatientService } from 'app/_services/patient/patient.service';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    formUser: FormGroup;

    idUser: string;
    user: User;
    infoPatient: Patient;
    id: number;
    constructor( private _UserService: UserService, private _PatientService: PatientService, private _authService: AuthService, private router: Router) {}

    ngOnInit(){
        this.idUser = this._authService.getIdUser();
        this.id =+ this.idUser;
        this._UserService.getUser(this.id).subscribe(data => {this.user = data;  console.log(this.user)});
        this.formInit();
    }

    formInit(){
        this.formUser = new FormGroup({ lastName: new FormControl(this.user.lastName, [Validators.required]),
                                        firstName: new FormControl('', [Validators.required]),
                                        email: new FormControl('', [Validators.required]),
                                        password: new FormControl('', [Validators.required]),
                                        address: new FormControl('', [Validators.required]),
                                        city: new FormControl('', [Validators.required]),
                                        postalCode: new FormControl('', [Validators.required]),
                                        phone: new FormControl('', [Validators.required])});
    }

    modifProfil(){
        
        if(this.formUser.valid){
            this._UserService.putUser(this.formUser.value, this.id).subscribe(success => {
              if (success) {
                this.router.navigate(['/profil']);
              }
            });
          }
    }
}
