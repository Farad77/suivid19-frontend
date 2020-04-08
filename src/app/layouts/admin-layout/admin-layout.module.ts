import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { QuestionnaireComponent }      from '../../pages/questionnaire/questionnaire.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ɵHttpInterceptingHandler } from '@angular/common/http';
import { MaterialModule } from 'app/_services/material.module';
import { SurveyService } from 'app/_services/survey/survey.service';
import { SurveyChoiceService } from 'app/_services/surveyChoice/survey-choice.service';
import { SurveyAnswerService } from 'app/_services/surveyAnswer/survey-answer.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    QuestionnaireComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
  ],
  providers:[
    SurveyService,
    SurveyChoiceService,
    SurveyAnswerService
  ]
})

export class AdminLayoutModule {}
