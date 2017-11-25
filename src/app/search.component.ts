import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  searchId;
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.searchId = params['id'];
    });
  }

}
