import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/_layout/header/header.component';
import { LayoutComponent } from './components/_layout/layout/layout.component';
import { FooterComponent } from './components/_layout/footer/footer.component';
import { SidenavComponent } from './components/_layout/sidenav/sidenav.component';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RequestResetComponent,
    ResponseResetComponent,
    HomeComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService, { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
  SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
