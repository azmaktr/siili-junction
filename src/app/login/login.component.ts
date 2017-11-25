import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  isLoggedIn;
  ngOnInit() {
     this.isLoggedIn = window.localStorage.getItem('token');
     if (this.isLoggedIn){
        this.router.navigate(['/dashboard']);
     }
  }
  submit(){
    window.localStorage.setItem('token', JSON.stringify({name: 'Rafay Khan'}))
    console.log("submit works");
    this.router.navigate(['/dashboard']);
    location.reload();
  }

}
