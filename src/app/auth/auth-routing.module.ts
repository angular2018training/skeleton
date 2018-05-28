import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignupPageComponent } from './containers/signup-page/signup-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'signup',
        component: SignupPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
