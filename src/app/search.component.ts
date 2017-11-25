import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AllresultService } from "./allresult.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  results;
  constructor(
    private activatedRoute: ActivatedRoute,
    private resultServ: AllresultService
  ) {}
  searchId;
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.searchId = params["id"];
      localStorage.setItem("lastsearch", this.searchId);
      this.resultServ.searchStuff(this.searchId).subscribe(results => {
        this.results = results;
        console.log(results);
      });
    });
  }
}
