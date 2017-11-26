import { Injectable } from "@angular/core";
//import { Observable } from "RxJS/Rx";
import { Http, Headers, RequestOptions } from "@angular/http";
// Statics
import "rxjs/add/observable/throw";
// Operators
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/toPromise";
const API_ENDPOINT = "http://junction-backendapp-01.azurewebsites.net/objects";
const API_ENDPOINT_SINGLE =
  "http://junction-backendapp-01.azurewebsites.net/objectbyid?objectid=";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJRCI6IjViNzBkYTY1LTlkMzQtNDQzNS1iODE3LWQ2YmU5ZGZjYTYwZCJ9LCJpYXQiOjE1MTE2MzE0NjQsImV4cCI6MTUxMTgwNDI2NH0.yHkmU9pFo0Q4mkHevJtHqhJ0Raa7tSxjlCclhR0nfyw";
@Injectable()
export class AllresultService {
  constructor(private http: Http) {}

  getResults() {
    let headers = new Headers({
      token: token,
      "content-type": "application/json",
      accept: "application/json"
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(API_ENDPOINT, options).map(res => res.json());
  }

  private search(query, results): any {
    return results.filter(result => {
      const concat = `${result.objinfo} ${result.objname}`;
      return concat.toLowerCase().includes(query.toLowerCase());
    });
  }

  searchStuff(searchStr = "") {
    let headers = new Headers({
      token: token,
      "content-type": "application/json",
      accept: "application/json"
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(API_ENDPOINT, options).map(res => {
      return this.search(searchStr, res.json());
    });
  }

  searchQty(searchStr = "", qty = 4) {
    let headers = new Headers({
      token: token,
      "content-type": "application/json",
      accept: "application/json"
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(API_ENDPOINT, options).map(res => {
      return this.search(searchStr, res.json()).slice(0, qty);
    });
  }
  searchOne(searchId = "") {
    let headers = new Headers({
      token: token,
      "content-type": "application/json",
      accept: "application/json"
    });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .get(API_ENDPOINT_SINGLE + searchId, options)
      .map(res => res.json());
  }
}
