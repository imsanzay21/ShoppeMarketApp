import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LayoutComponent } from './components/_layout/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
  { path: 'register', component: RegisterComponent, canActivate: [BeforeLoginService]},
  { path: 'request-reset', component: RequestResetComponent, canActivate: [BeforeLoginService]},
  { path: 'response-reset', component: ResponseResetComponent, canActivate: [BeforeLoginService]},
  { path: '', component: LayoutComponent, children: [
    { path: 'dashboard/home', component: HomeComponent, canActivate: [AfterLoginService] }
  ]},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
