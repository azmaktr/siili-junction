import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { FooterComponent } from "./footer/footer.component";
import { SearchComponent } from "./search.component";
import { FourOhfourComponent } from "./four-ohfour/four-ohfour.component";
import { AuthService } from "./services/auth.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RegistrationComponent } from "./registration/registration.component";
import { FormsModule } from "@angular/forms";
import { ProductComponent } from "./product/product.component";
import { AllresultService } from "./allresult.service";
import { AllprodsComponent } from "./allprods/allprods.component";

const appRoutes: Routes = [
  {
    path: "search/:id",
    component: SearchComponent,
    data: { title: "Search Results" },
    canActivate: [AuthGuardService]
  },
  {
    path: "explore",
    component: AllprodsComponent,
    data: { title: "All Products" },
    canActivate: [AuthGuardService]
  },
  { path: "", component: LoginComponent, data: { title: "Home" } },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    data: { title: "Dashboard" }
  },
  { path: "register", component: RegistrationComponent },
  {
    path: "product/:id",
    component: ProductComponent,
    data: { title: "Product Detail" }
  },
  {
    path: "404",
    component: FourOhfourComponent,
    data: { title: "Page Not Found" }
  },
  { path: "**", redirectTo: "/404" }
];

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
    AllprodsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [AuthService, AuthGuardService, AllresultService],
  bootstrap: [AppComponent]
})
export class AppModule {}
