import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeekComponent } from './month/week/week.component';
import { DayComponent } from './month/week/day/day.component';
import { MonthComponent } from './month/month.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-gaurd.service';
import { CanDeactivateGuard } from './month/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { RegisterService } from './register/register.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WeekComponent,
    DayComponent,
    MonthComponent,
    PageNotFoundComponent,
    ErrorPageComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    CanDeactivateGuard,
     RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
