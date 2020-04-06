import { NgModule, Component } from '@angular/core';
import { MatStepperModule, MatVerticalStepper } from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatStepperModule
  ],
})
export class MaterialModule { }