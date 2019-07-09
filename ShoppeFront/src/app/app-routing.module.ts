import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LayoutComponent } from './components/_layout/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'request-reset', component: RequestResetComponent},
  { path: 'response-reset', component: ResponseResetComponent},
  { path: '**', redirectTo: '/login', pathMatch: 'full'},
  { path: '', component: LayoutComponent, children: [
    { path: 'dashboard/home', component: HomeComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
