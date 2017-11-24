import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search.component';
const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
