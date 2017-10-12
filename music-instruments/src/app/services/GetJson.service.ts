import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class GetJson {

  constructor(private http: Http) { }

  getDataFromJson(file) {
    return this.http
      .get('../../assets/' + file + '.json')
      .toPromise()
      .then(this.extractData)
  }

  extractData(res: Response) {
    let results = res.json();
    return results;
  }

}
