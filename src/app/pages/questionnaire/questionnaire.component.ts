import {Component, OnInit,} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MaterialModule } from 'app/_services/material.module';
import { SurveyService } from 'app/_services/survey/survey.service';
import { SurveyAnswerService } from 'app/_services/surveyAnswer/survey-answer.service';
import { SurveyChoiceService } from 'app/_services/surveyChoice/survey-choice.service';
import { Survey } from 'app/_models/Survey';

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
  listQuestion: Array<Survey>;
  constructor( private _formBuilder: FormBuilder, private _SurveyServices: SurveyService, 
               private _SurveyAnswerService: SurveyAnswerService, private _SurveyChoiceService: SurveyChoiceService) {}

  
  
  ngOnInit() {
    this._SurveyServices.getSurveys().subscribe(data => {this.listQuestion = data;  console.log(this.listQuestion)  });
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
  }

  validQuestionnaire(){
    
  }
}