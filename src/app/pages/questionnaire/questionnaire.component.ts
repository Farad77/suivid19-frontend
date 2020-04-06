import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';


/**
 * @title Questionnaire
 */
@Component({
  selector: 'app-questionnaire',
  templateUrl: 'questionnaire.component.html',
  styleUrls: ['questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  isLinear = false;
  firstFormGroup:  FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      id:1
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      id:2
    });
  }
}