import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { SocialLoginContainerComponent } from './login/social-login-container/social-login-container.component';
import { SignUpForm11Component } from './login/sign-up-form11/sign-up-form11.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SocialRegisterContainerComponent } from './sign-up/social-register-container/social-register-container.component';
import { SignUpForm21Component } from './sign-up/sign-up-form21/sign-up-form21.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, SocialLoginContainerComponent, SignUpForm11Component, SignUpComponent, SocialRegisterContainerComponent, SignUpForm21Component],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
