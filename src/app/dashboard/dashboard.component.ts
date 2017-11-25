import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AllresultService } from '../allresult.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data;
  lastSearch;
  results = [];
  searched;
  constructor(private router:Router, private allResults: AllresultService) { }
  onSubmit(form){
    const id = form.value.id;
    this.router.navigate([`search/${id}`]);
    location.reload();
  }
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('token'));
    this.lastSearch = localStorage.getItem('lastsearch');
    this.searched = !!this.lastSearch;
    if (!!this.lastSearch){
      this.results = this.allResults.searchQty(this.lastSearch, 4);
    }
  }

}
