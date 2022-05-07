import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "./auth-gaurd.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { LoginComponent } from "./login/login.component";
import { CanDeactivateGuard } from "./month/can-deactivate-guard.service";
import { MonthComponent } from "./month/month.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RegisterComponent } from "./register/register.component";

const appRoutes: Routes = [
  { path: '', component: LoginComponent }, /* Todo make nice home page */
  { path: 'register', component: RegisterComponent },

  { path: 'login', component: LoginComponent, children: [
    { path: ':username', component: LoginComponent },
  ] },

  { path: 'table', canActivate: [AuthGuardService], canDeactivate: [CanDeactivateGuard], component: MonthComponent, children: [
    { path: ':username', component: MonthComponent },
  ]},
  // {path: 'not-found', component: PageNotFoundComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
