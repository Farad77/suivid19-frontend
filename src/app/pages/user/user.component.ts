import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/_services/user/user.service';
import { User } from 'app/_models/User';
import { Patient } from 'app/_models/Patient';
import { AuthService } from 'app/_services/auth/auth.service';
import { PatientService } from 'app/_services/patient/patient.service';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    constructor( private _UserService: UserService, private _PatientService: PatientService, 
                 private _authService: AuthService, private router: Router, private _snackBar:MatSnackBar) {}

    ngOnInit(){
        this.idUser = this._authService.getIdUser();
        this.id =+ this.idUser;
        this._UserService.getUser(this.id).subscribe(data => {
          this.user = data;
          this.formUser.get('lastName').setValue(this.user.lastName);
          this.formUser.get('firstName').setValue(this.user.firstName);
          this.formUser.get('email').setValue(this.user.email);
          this.formUser.get('address').setValue(this.user.address);
          this.formUser.get('city').setValue(this.user.city);
          this.formUser.get('postalCode').setValue(this.user.postalCode);
          this.formUser.get('phone').setValue(this.user.phone);
        });
        this.formInit();
    }

    formInit(){
        this.formUser = new FormGroup({ lastName: new FormControl('', [Validators.required]),
                                        firstName: new FormControl('', [Validators.required]),
                                        email: new FormControl('', [Validators.required]),
                                        address: new FormControl('', [Validators.required]),
                                        city: new FormControl('', [Validators.required]),
                                        postalCode: new FormControl('', [Validators.required]),
                                        phone: new FormControl('', [Validators.required])});
    }
    public findInvalidControls() {
      const invalid = [];
      const controls = this.formUser.controls;
      for (const name in controls) {
         /* if (controls[name].invalid) {
              console.log(name);
          }*/
      }
      return invalid;
  }

    modifProfil(){
      this.findInvalidControls();
      if(this.formUser.valid){
        this._UserService.putUser(this.formUser.value, this.id).subscribe(success => {
          if (success) {
            this._snackBar.open("Modification réaliser avec succès", "FERMER");
          }else{
            this._snackBar.open("La modification à échouée", "FERMER");
          }
        });
      }else{
        this._snackBar.open("La modification à échouée", "FERMER");
      }
    }
}
