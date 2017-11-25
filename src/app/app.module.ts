import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from "./footer/footer.component";
import { SearchComponent } from "./search.component";
import { FourOhfourComponent } from "./four-ohfour/four-ohfour.component";
import { AuthService } from "./services/auth.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { RegistrationComponent } from './registration/registration.component';
const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: '', component: LoginComponent },
  { path: '404', component: FourOhfourComponent },
  {path: 'register', component: RegistrationComponent},
  { path: '**', redirectTo: '/404' }
>>>>>>> Stashed changes
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    SearchComponent,
<<<<<<< Updated upstream
    FourOhfourComponent
=======
    FourOhfourComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes    )
>>>>>>> Stashed changes
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
