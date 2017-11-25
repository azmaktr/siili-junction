import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data;

  constructor(private router:Router) { }
  onSubmit(form){
    const id = form.value.id;
    this.router.navigate([`search/${id}`]);
    location.reload();
  }
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('token'));
  }

}
