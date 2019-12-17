import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/toPromise";
import { Observable } from "rxjs";
import { HttpResponse } from "selenium-webdriver/http";

@Injectable()
export class GetJson {
  constructor(private http: HttpClient) {}

  getDataFromJson(url) {
    return this.http
      .get(url)
      .toPromise()
      .then(this.extractData);
  }

  extractData(res: Observable<HttpResponse>) {
    let results = res;
    return results;
  }
}
