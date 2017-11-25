import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  isLoggedin;
  constructor(private router:Router) { }
  logout(){
    window.localStorage.removeItem('token');
    this.router.navigate(['/']);
    location.reload();
  }
  ngOnInit() {
    this.isLoggedin = !!window.localStorage.getItem('token');
  }

}
