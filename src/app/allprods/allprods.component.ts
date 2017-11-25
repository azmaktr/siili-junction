import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { AllresultService } from '../allresult.service';

@Component({
  selector: 'app-allprods',
  templateUrl: './allprods.component.html',
  styleUrls: ['./allprods.component.css']
})
export class AllprodsComponent implements OnInit {
  results;
  constructor(private activatedRoute: ActivatedRoute, private resultServ: AllresultService) {}
  ngOnInit() {
    this.resultServ.getResults().subscribe((results)=>{
      this.results = results;
      console.log(results)
    })
  }

}
