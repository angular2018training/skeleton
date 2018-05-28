import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './components/signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { SignupPageComponent } from './containers/signup-page/signup-page.component';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [
    LoginComponent,
    LoginPageComponent,
    SignupComponent,
    SignupPageComponent,
    AuthComponent
  ]
})
export class AuthModule {}
