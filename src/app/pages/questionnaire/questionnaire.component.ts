import {Component, OnInit,} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MaterialModule } from 'app/_services/material.module';

/**
 * @title Questionnaire
 */
@Component({
  selector: 'app-questionnaire',
  templateUrl: 'questionnaire.component.html',
  styleUrls: ['questionnaire.component.css'],
})
export class QuestionnaireComponent implements OnInit {
  isLinear = false;
  firstFormGroup:  FormGroup;
  secondFormGroup: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}