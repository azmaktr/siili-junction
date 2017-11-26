import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AllresultService } from "../allresult.service";
import { Route } from "@angular/router/src/config";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  result;
  searchId;
  constructor(
    private results: AllresultService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.searchId = params["id"];
      this.results.searchOne(this.searchId).subscribe(result => {
        this.result = result.pop();
      });
    });
  }
}
