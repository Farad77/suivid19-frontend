import { NgModule } from '@angular/core';
import { MatStepperModule, MatVerticalStepper, MatStepper } from '@angular/material/stepper';
import {MatFormFieldModule, MatFormFieldControl} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatLineModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
@NgModule({
  exports: [
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatLineModule,
    MatAutocompleteModule,
  ],
})
export class MaterialModule { }