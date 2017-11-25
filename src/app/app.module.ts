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
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule }   from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { AllresultService } from './allresult.service';

const appRoutes: Routes = [
  { path: "search/:id", component: SearchComponent, canActivate: [AuthGuardService] },
  { path: "", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuardService] },
  {path: 'register', component: RegistrationComponent},  
  {path: 'product/:id', component: ProductComponent}, 
  { path: "404", component: FourOhfourComponent },
  { path: "**", redirectTo: "/404" }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    SearchComponent,
    FourOhfourComponent,
    DashboardComponent,
    RegistrationComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [AuthService, AuthGuardService, AllresultService],
  bootstrap: [AppComponent]
})
export class AppModule {}
