import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { Space551Component } from './space551/space551.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProfileComponent, ProfileContainerComponent, Space551Component],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }